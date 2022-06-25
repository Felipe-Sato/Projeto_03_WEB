const express = require('express');
const Users = require('../controllers/UsersController');

var router = express.Router();

// Classe para o roteamento das requisicoes de Usuarios
console.log('App User Router');
router.get('/', Users.get);
router.post('/', Users.post);

module.exports = router;