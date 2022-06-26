const Word = require('../models/Words');
const jwt = require('jsonwebtoken');
const JWT_SECRET = 'as34a';

module.exports = {
    getWord: async (req, res) => {
        const { word } = req.query.Word;
        console.log('Word Controller GET');
        console.log(word);

        try {
            // Search engine by Word
            const reply = await Word.find({ word: word });
            // Error treatment
            if (reply != null) {
                console.log(reply);
                res.status(200).json({ status: '200', data: reply});
            } else {
                res.status(404).json({ status: '404', error: '404 Word Not Found' });
            }
        } catch (err) {
            res.status(401).json({ status: '401', error: '401 Not Authenticaded' });
        }
    },
    setWord: async (req, res) => {
        const { word, definitionType, definitionText } = req.body;
        console.log('Word Controller POST');

        try {
            console.log(req.body);
            // Create new Word
            const reply = await Word.create({
                word: word,
                definitionType: definitionType,
                definitionText: definitionText
            });
            res.status(200).json({ status: '200' });
        } catch (err) {
            console.log(err);
            res.status(401).json({ status: '401', error: '401 Not Authenticaded' });
        }
    }
}