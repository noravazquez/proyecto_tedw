const express = require('express');
const router = express.Router();
const { agregarAlCarrito, obtenerCarrito } = require('../controllers/cartCotroller');

router.post('/agregar-al-carrito/:idProducto', agregarAlCarrito);
router.get('/carrito', obtenerCarrito);
//router.get('/cupon', aplicarCuponDescuento);

module.exports = router;