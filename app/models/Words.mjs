import {MongoClient as Client} from 'mongodb';

// Classe de acesso ao banco de dados das palavras
module.exports = class Word {
    static async find(key) {
        return Client.connect('mongodb://localhost:27017/projeto3', async (err, db) => {
            return db.collection('words').find(key).toArray();
        });
    }

    static async post(key) {
        return Client.connect('mongodb://localhost:27017/projeto3', async (err, db) => {
            return db.collection('words').insertOne(key);
        });
    }
}