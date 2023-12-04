const express = require('express');
const authorize = require('../config/authMiddleware');
const { getAllCategorias, getCategoriaById, createCategoria, deleteCategoria, updateCategoria, getAllCupones, getAllMetodosPago, getAllProveedores} = require('../controllers/categoriaController');
const {obtenerOrdenesConDetalles, ordenes} = require('../controllers/reportsController')
const { getAllProductos, getProductoById, createProducto, updateProducto, deleteProducto} = require('../controllers/productController')

const router = express.Router();

//Rutas Para cruds categoria
/*router.get('/categorias', getAllCategorias);
router.get('/categoria/:id', getCategoriaById);
router.post('/categoria', authorize(1), createCategoria);
router.put('/categoria/:id', authorize(1), updateCategoria);
router.delete('/categoria/:id', authorize(1), deleteCategoria);*/
router.get('/categorias', getAllCategorias);
router.get('/categoria/:id', getCategoriaById);
router.post('/categoria', createCategoria);
router.put('/categoria/:id', updateCategoria);
router.delete('/categoria/:id', deleteCategoria);

router.get('/detallesordenes', obtenerOrdenesConDetalles);
router.get('/ordenes', ordenes);

router.get('/productos', getAllProductos);
router.get('/productos/:id', getProductoById);
router.post('/productos', createProducto);
router.delete('/productos/:id', deleteProducto);

router.get('/proveedores', getAllProveedores);
router.get('/cupondescuentos', getAllCupones);
router.get('/metodopagos', getAllMetodosPago);

module.exports = router;