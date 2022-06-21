import { MongoClient as Client } from 'mongodb';
import Word from '../models/Words';

module.exports = {
    get : async (req, res) => {
        // Search for word
        const { word } = req.query;
        const reply = await Word.find({word: word});

        // Error treatment
        if  (reply.length === 0) {
            res.status(201); // Not found
            return res.json({ status: 'error', error: 'Palavra desconhecida no dicionario' });
        } else {
            res.status(200); // Found
            return res.json({ status: 'ok', data: reply });
        }
    },
    post : (req, res) => {
        const { word, definitionType, definitionText } = req.body;
        const reply = await Word.createElement({
            word: word,
            definitionType: definitionType,
            definitionText: definitionText
        }, function (err, reply) {
            if (err) {
                res.status(400); // Not created
                throw err;
            }
        });
    }
}