const Carrito = require('../models/Carrito');
const DetalleCarrito = require('../models/DetalleCarrito');

exports.agregarAlCarrito = async (req, res) => {
  try {
    // Inserta a carrito
    res.json({ message: 'Producto agregado al carrito de compra' });
  } catch (error) {
    console.error('Error al agregar producto al carrito:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};