// this schema is defining the structure of our docs that we save to our collection on mongo

const mongoose = require('mongoose')

const Schema = mongoose.Schema

// represents what our data(argument) looks like- our schema forest
const datasetSchema = new Schema({
    title: { //property1
        type: String, //ex: if we we tried to save a new dataset doc as ints, it will not let us do that (but can incorporate)
        required: true
    },
    size: { //property2
        type: Number,
        required: true
    },
    load: { //property3
        type: Number,
        required: true
    }
}, { timestamps: true }) //lets us know when a doc was created & updates

// creates us a model and will import later.
// lets us interact with the dataset collections 
module.exports = mongoose.model('Dataset', datasetSchema)

// // finds all datasets 
// Dataset.find()