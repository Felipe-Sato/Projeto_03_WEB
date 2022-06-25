const express = require('express');
const Users = require('../controllers/UsersController');
const jwt = require('jsonwebtoken');
const JWT_SECRET = 'as34a';

var router = express.Router();

// Classe para o roteamento das requisicoes de Usuarios
console.log('App User Router');
router.get('/', Users.get);
router.post('/', Users.post);
router.post('/login', async (req, res) => {
    const { email, senha } = req.body;
    try {
        const reply = await Users.findOne({email: email});
        if (reply != null) {
            if (reply.senha === senha) {
                res.status(200).json({ status: '200 OK' });
            }
        }
    } catch (err) {
        res.status(401).json({ status: '401', error: '401 Not Authenticaded' });
    }

});

module.exports = router;