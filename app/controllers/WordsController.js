const Word = require('../models/Words');
const jwt = require('jsonwebtoken');
const JWT_SECRET = 'as34a';

module.exports = {
    get: async (req, res) => {
        const { token } = req.query;
        const { word } = req.query;
        console.log('Word Controller GET');

        try {
            if(token!= null) {
                // Auth token
                jwt.verify(token, JWT_SECRET);
                // Search for word
                const reply = await Word.find({ word: word });

                // Error treatment
                
            }
        } catch (err) {
            res.status(401).json({ status: '401', error: '401 Not Authenticaded' });
        }
    },
    post: async (req, res) => {
        const { token } = req.query;
        const { word, definitionType, definitionText } = req.body;
        console.log('Word Controller POST');

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