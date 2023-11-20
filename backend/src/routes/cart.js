const express = require('express');
const router = express.Router();
const { agregarAlCarrito } = require('../controllers/cartCotroller');

router.post('/agregar-al-carrito/:idProducto', agregarAlCarrito);

module.exports = router;