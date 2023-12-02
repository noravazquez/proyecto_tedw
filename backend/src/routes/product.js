const express = require('express');
const { obtenerProductos, obtenerDetalleProducto, totalProductosByCategoria} = require('../controllers/productController');

const router = express.Router();

router.get('/products', obtenerProductos);
router.get('/products/:idProducto', obtenerDetalleProducto);
router.get('/productoByCategoria', totalProductosByCategoria);

module.exports = router;
