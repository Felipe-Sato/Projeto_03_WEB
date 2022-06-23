const express = require('express');
const Users = require('../controllers/UsersController');

var router = express.Router();

// Classe para o roteamento das requisicoes de Usuarios
router.get('/Users', Users.get);
router.post('/Users', Users.post);

module.exports = router;