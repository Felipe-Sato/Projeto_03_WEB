const express = require('express');
const Words = require('../controllers/WordsController');

var router = express.Router();

// Classe para o roteamento das requisicoes de Palavras
console.log('App Word Router');
router.post('/get', Words.getWord);
router.post('/set', Words.setWord);

module.exports = router;