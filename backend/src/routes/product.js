const express = require('express');
const { obtenerProductos, obtenerDetalleProducto, totalProductosByCategoria, obtenerProductosByCategoria, ultimosProductosByCatergoria, ultimosProductos, totalProductos, totalProductosCategoria} = require('../controllers/productController');

const router = express.Router();

router.get('/products', obtenerProductos);
router.get('/products/:idProducto', obtenerDetalleProducto);
router.get('/productoByCategoria', totalProductosByCategoria);
router.get('/lastproducts', ultimosProductos);
router.get('/lastproducts/:idCategoria', ultimosProductosByCatergoria);
router.get('/productsByCategoria/:idCategoria', obtenerProductosByCategoria);
router.get('/totalProductos', totalProductos);
router.get('/productoByCategoria/:idCategoria', totalProductosCategoria)

module.exports = router;
