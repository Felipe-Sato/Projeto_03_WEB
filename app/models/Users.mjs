import mongoose from 'mongoose';

// Classe de acesso ao banco de dados dos usuarios
const user = new mongoose.Schema({
    "email": {
        type: "string",
        required: true,
        unique: true,
        max: 255,
        min: 0
    },

    "password": {
        type: "string",
        required: true,
        max: 255,
        min: 0
    },

    "photo": {
        type: "file",
        required: true,
    },

    "adminLevel": {
        type: "boolean",
        required: true
    }
});

module.exports = mongoose.model('User', user);
