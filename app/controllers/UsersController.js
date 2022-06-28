const User = require('../models/Users');
const jwt = require('jsonwebtoken');
const JWT_SECRET = 'as34a';

module.exports = {
    get: async (req, res) => {
        const token = req.params.Token;
        console.log('User Controller GET');
        console.log(token);

        try {
            // Auth token
            const { email } = jwt.verify(token, JWT_SECRET);
            console.log(email);

            // Search for user
            const reply = await User.find({ email: email });

            if (reply != null) {
                res.status(200);
            } else {
                // Error treatment
                res.status(404).json({ status: '404', error: 'User not found' });
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
            res.status(200).json({ status: '200' });
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
            // Search User
            console.log(email);
            console.log(senha);
            const reply = await User.find({ email: email, senha: senha });
            console.log(reply);
            if (reply != null) {
                const token = jwt.sign({ email: email }, JWT_SECRET);
                console.log(token);
                res.status(200).json({ status: '200', token: token });
            } else {
                res.status(404).json({ status: '404', error: '404 User Not Found' });
            }
        } catch (err) {
            console.log(err);
            res.status(401).json({ status: '401', error: '401 Not Authenticaded' });
        }
    }
}