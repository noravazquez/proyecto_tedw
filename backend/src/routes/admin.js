const express = require('express');
const { getAllCategorias, getCategoriaById, createCategoria, deleteCategoria, updateCategoria} = require('../controllers/categoriaController');

const router = express.Router();

//Rutas Para cruds categoria
router.get('/categorias', getAllCategorias);
router.get('/categoria/:id', getCategoriaById);
router.post('/categoria', createCategoria);
router.put('/categoria/:id', updateCategoria);
router.delete('/categoria/:id', deleteCategoria);

module.exports = router;