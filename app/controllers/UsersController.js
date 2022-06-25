const User = require('../models/Users');
const jwt = require('jsonwebtoken');
const JWT_SECRET = 'as34a';

module.exports = {
    get: async (req, res) => {
        const { token } = req.query;
        const { email } = req.query;
        console.log('User Controller GET');

        try {
            // Auth token
            //jwt.verify(token, JWT_SECRET);

            // Search for user
            const reply = await User.find({ email: email});

            if (reply === null) {
                // Error treatment
                res.status(404).json({ status: '404', error: 'User not found' });
            } else {
                res.status(200).json({ data: reply });
            }
        } catch (err) {
            res.status(401).json({ status: '401', error: '401 Not Authenticaded' });
        }
    },
    signup: async (req, res) => {
        const { nome, email, senha, admin } = req.body;
        console.log('User Controller SIGNUP');
        console.log(req.body);

        try {
            // Create new User
            const reply = await User.create({
                nome,
                email,
                senha,
                admin
            });
            if (reply != null) {
                res.status(200).json({ status: '200', data: token });
            }
        } catch (err) {
            console.log(err);
            res.status(401).json({ status: '401', error: '401 Not Authenticaded' });
        }
    },
    signin: async (req, res) => {
        const { email, senha } = req.body;
        console.log('User Controller SIGNIN');
        console.log(req.body);

        try {
            // Create new User
            const reply = await User.findOne({
                email: email,
                senha: senha
            });
            if(reply != null) {
                const token = jwt.sign(reply, JWT_SECRET);
                res.status(200).json({ status: '200', data: token });
            }
        } catch (err) {
            console.log(err);
            res.status(401).json({ status: '401', error: '401 Not Authenticaded' });
        }
    }
}