const express = require('express');
const Words = require('../controllers/WordsController');

var router = express.Router();

// Classe para o roteamento das requisicoes de Palavras
router.get('/word', Words.get);
router.post('/word', Words.post);

module.exports = router;