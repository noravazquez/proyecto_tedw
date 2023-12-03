const express = require('express');
const { obtenerProductos, obtenerDetalleProducto, totalProductosByCategoria, obtenerProductosByCategoria, ultimosProductosByCatergoria, ultimosProductos, totalProductos} = require('../controllers/productController');

const router = express.Router();

router.get('/products', obtenerProductos);
router.get('/products/:idProducto', obtenerDetalleProducto);
router.get('/productoByCategoria', totalProductosByCategoria);
router.get('/lastproducts', ultimosProductos);
router.get('/lastproducts/:idCategoria', ultimosProductosByCatergoria);
router.get('/productsByCategoria/:idCategoria', obtenerProductosByCategoria);
router.get('/totalProductos', totalProductos);

module.exports = router;
