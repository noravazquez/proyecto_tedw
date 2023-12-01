const express = require('express');
const { obtenerProductos, obtenerDetalleProducto} = require('../controllers/productController');

const router = express.Router();

router.get('/products', obtenerProductos);
router.get('/products/:idProducto', obtenerDetalleProducto);

module.exports = router;