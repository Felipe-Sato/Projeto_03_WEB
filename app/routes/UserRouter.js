const express = require('express');
const Users = require('../controllers/UsersController');

var router = express.Router();

// Classe para o roteamento das requisicoes de Usuarios
router.get('/user', Users.get);
router.post('/user', Users.post);

module.exports = router;