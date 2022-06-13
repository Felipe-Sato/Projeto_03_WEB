import WordDAO from '../models/Words';
var router = express.router();
// Classe para o roteamento das requisicoes de Usuarios
router.get('/word', async function(req, res, next) {
    var url = req.url;
    WordDAO.find(url);
    res.end();
});

router.post('/word/key:', async function(req, res, next) {
    try {
        res = WordDAO.post(req.params.key);
        res.end();
    } catch (err) {
        throw err;
    }
});

module.exports = router;