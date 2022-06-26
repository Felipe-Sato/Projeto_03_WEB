const express = require('express');
const Archive = require('../controllers/ArchController');

var router = express.Router();
console.log('App Upload Router');
router.post('/', Archive.upload);

module.exports = router;