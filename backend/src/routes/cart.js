const express = require('express');
const router = express.Router();
const authorize = require('../config/authMiddleware');
const { agregarAlCarrito, obtenerCarrito, aplicarCuponDescuento, eliminarCantidadDelCarrito, eliminarDelCarrito } = require('../controllers/cartCotroller');

router.post('/agregar-al-carrito/:idProducto', agregarAlCarrito);
router.get('/carrito/:id', obtenerCarrito);
router.get('/cupon', aplicarCuponDescuento);
router.delete('/eliminar-del-carrito/:idProducto', eliminarDelCarrito);
router.delete('/elimina-de-carrito/:idProducto', eliminarCantidadDelCarrito);

module.exports = router;