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
    },

    async atualizarCategoria(req, res) {
        try {
            const { id } = req.params;
            const [update] = await Categoria.update(req.body, {
                where: { id }
            });
            if (update) {
                const updateCategoria = await Categoria.findOne({ where: { id } });
                res.status(200).json(updateCategoria);
            } else {
                res.status(404).json({ error: "Categoria não encontrada" });
            }
        } catch (error) {
            res.status(500).json({ error: "Erro ao atualizar Categoria." });
        }
    },
    async deletarCategoria(req, res){
        try {
            const { id } = req.params;
            const [update] = await Categoria.destroy({
                where: { id }
            });
            if (deleted) {
                res.status(204).json();
            } else {
                res.status(404).json({ error: "Categoria não encontrada" });
            }
        } catch (error) {
            res.status(500).json({ error: "Erro ao excluir Categoria." });
        }
    },

}

module.exports = CategoriaController;