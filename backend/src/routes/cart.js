const express = require('express');
const router = express.Router();
const authorize = require('../config/authMiddleware');
const { agregarAlCarrito, obtenerCarrito, aplicarCuponDescuento, eliminarCantidadDelCarrito, eliminarDelCarrito } = require('../controllers/cartCotroller');

router.post('/agregar-al-carrito/:idProducto', authorize(2), agregarAlCarrito);
router.get('/carrito', authorize(2), obtenerCarrito);
router.get('/cupon', authorize(2), aplicarCuponDescuento);
router.delete('/eliminar-del-carrito/:idProducto', authorize(2), eliminarDelCarrito);
router.delete('/elimina-de-carrito/:idProducto', authorize(2), eliminarCantidadDelCarrito);

module.exports = router;