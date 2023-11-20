const Producto = require('../models/Producto')

exports.obtenerProductos = async (req, res) =>{
    try {
        const productos=await Producto.findAll();
        res.json({productos});
    } catch (error) {
        console.error('Error al obtener productos:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};