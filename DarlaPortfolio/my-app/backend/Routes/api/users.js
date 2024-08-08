const express = require('express');
const router = express.Router();
const User = require('../../User.js');
const bcrypt = require('bcryptjs');

//password hashing and comparisons ...
const bcrypt = require('bcryptjs');
//manages user sessions 
const jwt = require('jsonwebtoken');

const password = "password123";
const saltRounds = 10; // Use the same salt rounds as your registration process

bcrypt.hash(password, saltRounds, function(err, hash) {
    // Now compare this new hash with the stored hash for 'newuser'
    console.log("Newly hashed password:", hash);
    // Use bcrypt.compare() as before
});

// Simulate the login password and the hash stored in the database
const loginPassword = 'password123'; // The password you are trying to login with
const storedHash = '$2a$10$VG2rXzDW7ejv/NiQBSP6WuQGkOgKqDjTqD2HwvKDqtnEpf2NmvwNm'; // The hash stored in the database

bcrypt.compare(loginPassword, storedHash, (err, isMatch) => {
    if (err) {
        console.log(err);
    } else if (isMatch) {
        console.log('Password matches!');
    } else {
        console.log('Password does not match.');
    }
});

router.post('/register', async (req, res) => {
    const { username, password } = req.body;
    
    try {
        // check if the user already exists
        let user = await User.findOne({ username });
        if (user) {
            return res.status(400).json({ msg: 'User already exists' });
        }
        
        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create a new user instance
        user = new User({
            username,
            password: hashedPassword,
        });

        // Save the user to the database
        await user.save();
        res.status(201).json({ msg: 'User registered successfully' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});
  

module.exports = router;
