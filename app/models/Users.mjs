import {MongoClient as Client} from 'mongodb';

// Classe de acesso ao banco de dados dos usuarios
module.exports = class User {
    static async find(key) {
        return Client.connect('mongodb://localhost:27017/projeto3', async (err, db) => {
            if(!err) {
                return db.collection('users').find(key).toArray();
            } else {
                throw err; 
            }
        });
    }

    static async post(key) {
        return Client.connect('mongodb://localhost:27017/projeto3', async (err, db) => {
            if(!err) {
                return db.collection('users').insertOne(key);
            } else {
                throw err; 
            }
        });
    }
};
