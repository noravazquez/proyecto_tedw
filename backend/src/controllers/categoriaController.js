const Categoria = require('../models/categorias');

const categoriasController = {
  getAllCategorias: async (req, res) => {
    try {
      const categorias = await Categoria.findAll();
      res.json({ categorias });
    } catch (error) {
      console.error('Error al obtener categorías:', error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  },

  getCategoriaById: async (req, res) => {
    try {
      const { id } = req.params;
      const categoria = await Categoria.findByPk(id);

      if (!categoria) {
        return res.status(404).json({ error: 'Categoría no encontrada' });
      }

      res.json({ categoria });
    } catch (error) {
      console.error('Error al obtener detalles de la categoría:', error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  },

  createCategoria: async (req, res) => {
    try {
      const { nombre } = req.body;

      const nuevaCategoria = await Categoria.create({
        nombre,
      });

      res.json({ nuevaCategoria });
    } catch (error) {
      console.error('Error al crear una nueva categoría:', error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  },

  updateCategoria: async (req, res) => {
    try {
      const { id } = req.params;
      const { nombre } = req.body;

      const categoriaActualizada = await Categoria.update(
        { nombre },
        { where: { id } }
      );

      if (categoriaActualizada[0] === 0) {
        return res.status(404).json({ error: 'Categoría no encontrada' });
      }

      res.json({ mensaje: 'Categoría actualizada correctamente' });
    } catch (error) {
      console.error('Error al actualizar una categoría:', error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  },

  deleteCategoria: async (req, res) => {
    try {
      const { id } = req.params;

      const resultado = await Categoria.destroy({ where: { id } });

      if (!resultado) {
        return res.status(404).json({ error: 'Categoría no encontrada' });
      }

      res.json({ mensaje: 'Categoría eliminada correctamente' });
    } catch (error) {
      console.error('Error al eliminar una categoría:', error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  },
};

module.exports = categoriasController;
