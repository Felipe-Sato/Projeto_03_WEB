const express = require('express');
const Words = require('../controllers/WordsController');

var router = express.Router();

// Classe para o roteamento das requisicoes de Palavras
console.log('App Word Router');
router.get('/get:word', Words.get);
router.post('/set', Words.post);

module.exports = router;