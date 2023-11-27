const Producto = require('../models_antes/Producto')
const Categoria = require('../models_antes/Categoria')
const Proveedor = require('../models_antes/Proveedor')

exports.obtenerProductos = async (req, res) =>{
    try {
        const productos=await Producto.findAll();
        res.json({productos});
    } catch (error) {
        console.error('Error al obtener productos:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

exports.obtenerDetalleProducto = async (req, res) => {
    try {
      const { idProducto } = req.params;
      const producto = await Producto.findByPk(idProducto, {
        include: [Categoria, Proveedor],
      });
  
      if (!producto) {
        return res.status(404).json({ error: 'Producto no encontrado' });
      }
  
      res.json({ producto });
    } catch (error) {
      console.error('Error al obtener detalles del producto:', error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  };