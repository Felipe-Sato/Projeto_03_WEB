import UserDAO from '../models/Users';
var router = express.router();
// Classe para o roteamento das requisicoes de Usuarios
router.get('/user', async function(req, res, next) {
    var url = req.url;
    UserDAO.find(url);
    res.end();
})

router.post('/user', async function(req, res, next) {
    try {
        
    } catch (err) {
        throw err;
    }
})

module.exports = router;