const categoriaController = require('../controllers/categoriaController');
const express = require('express');
const router = express.Router();

router.get('/listar', categoriaController.listarCategorias);
router.post('/criar', categoriaController.criarCategoria);

module.exports = router;