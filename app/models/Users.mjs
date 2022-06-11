import {MongoClient as Client} from 'mongodb';

// Classe de acesso ao banco de dados dos usuarios
module.exports = class User {
    static async find(key) {
        return Client.connect('mongodb://localhost:27017/projeto3', async (err, db) => {
            return db.collection('users').find(key).toArray();
        });
    }

    static async post(key) {
        return Client.connect('mongodb://localhost:27017/projeto3', async (err, db) => {
            return db.collection('users').insertOne(key);
        });
    }
};
