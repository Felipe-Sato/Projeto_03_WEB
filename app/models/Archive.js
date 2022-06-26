const mongoose = require('mongoose');

const archSchema = new mongoose.Schema({
  file: {
    type: String,
    required: true,
    unique: true
  }
});

module.exports = mongoose.model('Archive', archSchema);