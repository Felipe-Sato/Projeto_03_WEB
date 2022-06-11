import mongoose from 'mongoose';

// Classe de acesso ao banco de dados das palavras
const word = new mongoose.Schema({
    "word": {
        type: "string",
        required: true,
        max: 64,
        min: 0
    },

    "partOfSpeech": {
        type: "string",
        required: false,
        max: 64,
        min: 0
    },

    "definition": {
        type: "string",
        required: false,
        max: 255,
        min: 0
    },

    "example": {
        type: "string",
        required: true,
        max: 255,
        min: 0
    },

    "synonyms": {
        type: "string",
        required: false,
        max: 255,
        min: 0
    },

    "antonyms": {
        type: "string",
        required: false,
        max: 255,
        min: 0
    }
});

module.exports = mongoose.model('Word', word);
