const Rol = require('../models/rol');

const rolesController = {
  getAllRoles: async (req, res) => {
    try {
      const roles = await Rol.findAll();
      res.json({ roles });
    } catch (error) {
      console.error('Error al obtener roles:', error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  },

  getRolById: async (req, res) => {
    try {
      const { id } = req.params;
      const rol = await Rol.findByPk(id);

      if (!rol) {
        return res.status(404).json({ error: 'Rol no encontrado' });
      }

      res.json({ rol });
    } catch (error) {
      console.error('Error al obtener detalles del rol:', error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  },

  createRol: async (req, res) => {
    try {
      const { nombre } = req.body;

      const nuevoRol = await Rol.create({
        nombre,
      });

      res.json({ nuevoRol });
    } catch (error) {
      console.error('Error al crear un nuevo rol:', error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  },

  updateRol: async (req, res) => {
    try {
      const { id } = req.params;
      const { nombre } = req.body;

      const rolActualizado = await Rol.update(
        { nombre },
        { where: { id } }
      );

      if (rolActualizado[0] === 0) {
        return res.status(404).json({ error: 'Rol no encontrado' });
      }

      res.json({ mensaje: 'Rol actualizado correctamente' });
    } catch (error) {
      console.error('Error al actualizar un rol:', error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  },

  deleteRol: async (req, res) => {
    try {
      const { id } = req.params;

      const resultado = await Rol.destroy({ where: { id } });

      if (!resultado) {
        return res.status(404).json({ error: 'Rol no encontrado' });
      }

      res.json({ mensaje: 'Rol eliminado correctamente' });
    } catch (error) {
      console.error('Error al eliminar un rol:', error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  },
};

module.exports = rolesController;
