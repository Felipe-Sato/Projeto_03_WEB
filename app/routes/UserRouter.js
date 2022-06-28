const express = require('express');
const Users = require('../controllers/UsersController');

var router = express.Router();

// Classe para o roteamento das requisicoes de Usuarios
console.log('App User Router');
router.get('/:Token', Users.get);
router.post('/signup', Users.signup);
router.post('/signin', Users.signin);

module.exports = router;