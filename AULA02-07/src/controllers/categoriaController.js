const Categoria = require('../models/CategoriaModels');

const CategoriaController = {

    async listarCategorias(req, res){
        try{
            const categorias = await Categoria.findAll();
            res.json(categorias);
        }catch(error){
            res.status(500).json({error: error.message});
        }
    },

    async criarCategoria(req, res) {
        try {
            const categoria = await Categoria.create(req.body);
            res.status(201).json(categoria);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

}

module.exports = CategoriaController;