const express = require('express');
const authorize = require('../config/authMiddleware');
const { getAllCategorias, getCategoriaById, createCategoria, deleteCategoria, updateCategoria, getAllCupones, getAllMetodosPago, getAllProveedores} = require('../controllers/categoriaController');
const {obtenerOrdenesConDetalles, ordenes} = require('../controllers/reportsController')
const { getAllProductos, getProductoById, createProducto, updateProducto, deleteProducto} = require('../controllers/productController')

const router = express.Router();

//Rutas Para cruds categoria
router.get('/categorias', authorize(1),getAllCategorias);
router.get('/categoria/:id',authorize(1), getCategoriaById);
router.post('/categoria', authorize(1), createCategoria);
router.put('/categoria/:id', authorize(1), updateCategoria);
router.delete('/categoria/:id', authorize(1), deleteCategoria);


router.get('/detallesordenes',authorize(1), obtenerOrdenesConDetalles);
router.get('/ordenes',authorize(1), ordenes);

router.get('/productos',authorize(1), getAllProductos);
router.get('/productos/:id',authorize(1), getProductoById);
router.post('/productos',authorize(1), createProducto);
router.delete('/productos/:id',authorize(1), deleteProducto);

router.get('/proveedores',authorize(1), getAllProveedores);
router.get('/cupondescuentos',authorize(1), getAllCupones);
router.get('/metodopagos',authorize(1), getAllMetodosPago);

module.exports = router;