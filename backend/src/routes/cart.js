const express = require('express');
const router = express.Router();
const { agregarAlCarrito } = require('../controllers/cartController');

router.post('/agregar-al-carrito/:idProducto', agregarAlCarrito);

module.exports = router;