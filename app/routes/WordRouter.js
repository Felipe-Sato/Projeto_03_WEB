const express = require('express');
const Words = require('../controllers/WordsController');

var router = express.Router();

// Classe para o roteamento das requisicoes de Palavras
console.log('App Word Router');
router.get('/Words', Words.get);
router.post('/Words', Words.post);

module.exports = router;