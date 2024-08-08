const mongoose = require('mongoose');
const { Schema } = mongoose;

const DatasetRecordSchema = new mongoose.Schema({
    datasetName: String,
    data: mongoose.Schema.Types.Mixed, // Flexible to store any data structure
  }, { timestamps: true });
  
  module.exports = mongoose.model('DatasetRecord', DatasetRecordSchema);
  