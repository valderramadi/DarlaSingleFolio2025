/// This model will represent the structure of the project data we want 
/// to store, including title, description, and samples.
const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  projectTitle: {
    type: String,
    required: true,
  },
  toolDescription: {
    type: String,
    required: true,
  },
  samples: [{
    prompt: String,
    completion: String,
  }],
}, { timestamps: true });

module.exports = mongoose.model('Project', projectSchema);
