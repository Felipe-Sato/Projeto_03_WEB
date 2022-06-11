import WordDAO from './app/models/Words';

import http from 'http'
import express from 'express'

// Classe para o roteamento das requisicoes de Palavras
module.exports = class WordRouter {
    static async find(key) {
        return Client.connect('mongodb://localhost:27017/words', async (err, db) => {
            return db.collection('words').find(key).toArray();
        });
    }

    static async post(key) {
        return Client.connect('mongodb://localhost:27017/words', async (err, db) => {
            return db.collection('words').insertOne(key);
        });
    }
}
