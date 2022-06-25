const express = require('express');
const Users = require('../controllers/UsersController');
const jwt = require('jsonwebtoken');
const JWT_SECRET = 'as34a';

var router = express.Router();

// Classe para o roteamento das requisicoes de Usuarios
console.log('App User Router');
router.get('/', Users.get);
router.post('/signup', Users.signup);
router.post('/signin', Users.signin);

module.exports = router;