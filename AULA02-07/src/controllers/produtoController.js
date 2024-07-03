const Produto = require('../models/ProdutoModels');

const ProdutoController = {

    async listarProdutos(req, res) {
        try {
            const produtos = await Produto.findAll();
            res.json(produtos);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    async criarProduto(req, res) {
        try {
            const produto = await Produto.create(req.body);
            res.status(201).json(produto);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

}

module.exports = ProdutoController;