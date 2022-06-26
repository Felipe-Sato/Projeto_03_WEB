const mongoose = require('mongoose');

const archSchema = new mongoose.Schema({
  file: {
    type: String,
    required: true,
    unique: true
  },

  title: {
    type: String,
    required: true,
    unique: false
  }
});

module.exports = mongoose.model('Archive', archSchema);