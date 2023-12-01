const Proveedor = require('../models/proveedors');

const proveedoresController = {
  getAllProveedores: async (req, res) => {
    try {
      const proveedores = await Proveedor.findAll();
      res.json({ proveedores });
    } catch (error) {
      console.error('Error al obtener proveedores:', error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  },

  getProveedorById: async (req, res) => {
    try {
      const { id } = req.params;
      const proveedor = await Proveedor.findByPk(id);

      if (!proveedor) {
        return res.status(404).json({ error: 'Proveedor no encontrado' });
      }

      res.json({ proveedor });
    } catch (error) {
      console.error('Error al obtener detalles del proveedor:', error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  },

  createProveedor: async (req, res) => {
    try {
      const { nombre, direccion, telefono, email } = req.body;

      const nuevoProveedor = await Proveedor.create({
        nombre,
        direccion,
        telefono,
        email,
      });

      res.json({ nuevoProveedor });
    } catch (error) {
      console.error('Error al crear un nuevo proveedor:', error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  },

  updateProveedor: async (req, res) => {
    try {
      const { id } = req.params;
      const { nombre, direccion, telefono, email } = req.body;

      const proveedorActualizado = await Proveedor.update(
        { nombre, direccion, telefono, email },
        { where: { id } }
      );

      if (proveedorActualizado[0] === 0) {
        return res.status(404).json({ error: 'Proveedor no encontrado' });
      }

      res.json({ mensaje: 'Proveedor actualizado correctamente' });
    } catch (error) {
      console.error('Error al actualizar un proveedor:', error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  },

  deleteProveedor: async (req, res) => {
    try {
      const { id } = req.params;

      const resultado = await Proveedor.destroy({ where: { id } });

      if (!resultado) {
        return res.status(404).json({ error: 'Proveedor no encontrado' });
      }

      res.json({ mensaje: 'Proveedor eliminado correctamente' });
    } catch (error) {
      console.error('Error al eliminar un proveedor:', error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  },
};

module.exports = proveedoresController;
