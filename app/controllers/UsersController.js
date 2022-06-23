const User = require('../models/Users');
const jwt = require('jsonwebtoken');
const JWT_SECRET = 'as34a';

module.exports = {
    get : async (req, res) => {
        const { token } = req.query;
        const { email } = req.query;

        try {
            // Auth token
            jwt.verify(token, JWT_SECRET);
            
            // Search for user
            const reply = await User.find({email: email});
    
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
        const { nome, email, senha, admin} = req.body;
        
        try {
            // Auth token
            // jwt.verify(token, JWT_SECRET);
                
            // Create new User
            const reply = await User.createElement({
                nome, 
                email, 
                senha,
                admin
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