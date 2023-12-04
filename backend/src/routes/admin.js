const express = require('express');
const authorize = require('../config/authMiddleware');
const { getAllCategorias, getCategoriaById, createCategoria, deleteCategoria, updateCategoria} = require('../controllers/categoriaController');
const {obtenerOrdenesConDetalles} = require('../controllers/reportsController')
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

router.get('/productos', getAllProductos);
router.get('/productos/:id', getProductoById);
router.post('/productos', createProducto);
router.delete('/productos/:id', deleteProducto);

module.exports = router;