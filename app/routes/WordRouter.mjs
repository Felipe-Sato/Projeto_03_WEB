import WordDAO from '../controllers/WordsController';
var router = express.Router();
// Classe para o roteamento das requisicoes de Palavras

router.get('/', WordDAO.get);
router.post('/', WordDAO.post);

module.exports = router;