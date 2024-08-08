const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const validator = require('validator')

const Schema = mongoose.Schema

const userSchema = new Schema({
    firstname: {
        type: String,
        required: [true, 'First name is required'],
    },
    lastname: {
        type: String,
        required: [true, 'Last name is required'],
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, 'Please enter a valid email'],
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    }
});

// static signup method
userSchema.statics.signup = async function({ firstname, lastname, email, username, password }) {
    // validation here
    if (!email || !username || !password || !firstname || !lastname) {
        throw Error('All fields must be filled');
    }

    if (!validator.isEmail(email)) {
        throw Error('Email not valid');
    }

    if (!validator.isStrongPassword(password, { minLength: 6, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1 })) {
        throw Error('Password not strong enough');
    }

    const exists = await this.findOne({ $or: [{ email }, { username }] });

    if (exists) {
        throw Error('Email or Username already in use');
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const user = await this.create({ firstname, lastname, email, username, password: hash });

    return user;
};

//static login method
userSchema.statics.login = async function(username, password) {

    if (!username || !password) {
        throw Error('All fields must be filled')
    }

    const user = await this.findOne({ username })
    if (!user) {
        throw Error('Incorrect email')
    }

    const match = await bcrypt.compare(password, user.password)

    if (!match) {
        throw Error('Incorrect password')
    }

    return user
}


module.exports = mongoose.model('User', userSchema)