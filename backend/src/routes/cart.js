const express = require('express');
const router = express.Router();
const authorize = require('../config/authMiddleware');
const { agregarAlCarrito, obtenerCarrito, aplicarCuponDescuento, eliminarCantidadDelCarrito, eliminarDelCarrito } = require('../controllers/cartCotroller');

router.post('/agregar-al-carrito/:idProducto/:id', agregarAlCarrito);
router.get('/carrito/:id', obtenerCarrito);
router.get('/cupon', aplicarCuponDescuento);
router.delete('/eliminar-del-carrito/:idProducto/:id', eliminarDelCarrito);
router.delete('/elimina-de-carrito/:id/:idProducto', eliminarCantidadDelCarrito);

module.exports = router;