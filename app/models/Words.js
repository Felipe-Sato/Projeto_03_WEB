const mongoose = require('mongoose');

const wordSchema = new mongoose.Schema({
    word : {
        type : 'string',
        required : true,
        unique : false,
        maxLength :255,
        minLength :1
    },

    definitionType : {
        type : 'string',
        required : true,
        maxLength :255,
        minLength :1
    },

    definitionText : {
        type : 'string',
        required : true,
        maxLength :511,
        minLength :1
    }
});

module.exports = mongoose.model('Word', wordSchema);