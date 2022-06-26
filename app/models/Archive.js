const mongoose = require('mongoose');

const archSchema = new mongoose.Schema({
  file: {
    type: 'string',
    required: true,
    unique: true
  },

  title: {
    type: 'string',
    required: true,
    unique: false
  }
});

module.exports = mongoose.model('Archive', archSchema);