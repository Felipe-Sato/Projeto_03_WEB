const Word = require('../models/Words');
const jwt = require('jsonwebtoken');
const JWT_SECRET = 'as34a';

module.exports = {
    get : async (req, res) => {
        const { token } = req.query;
        const { word } = req.query;

        try {
            // Auth token
            jwt.verify(token, JWT_SECRET);

            // Search for word
            const reply = await Word.find({word: word});

            // Error treatment
            if  (reply.length === 0) {
                res.status(404).json({ status: '404', error: '404 Not Found' });
            } else {
                res.status(200).json({ status: '200', data: reply });
            }
        } catch (err) {
            res.status(401).json({ status: '401', error: '401 Not Authenticaded' });
        }
    },
    post : async (req, res) => {
        const { token } = req.query;
        const { word, definitionType, definitionText } = req.body;

        try {
            // Auth token
            jwt.verify(token, JWT_SECRET);
            
            // Create new Word
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
        } catch (err) {
            res.status(401).json({ status: '401', error: '401 Not Authenticaded' });
        }
    }
}