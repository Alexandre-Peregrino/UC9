const produtoController = require('../controllers/produtoController');
const express = require('express');
const router = express.Router();

router.get('/listar', produtoController.listarProdutos);
router.post('/criar', produtoController.criarProduto);

module.exports = router;