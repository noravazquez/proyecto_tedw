const express = require('express');
const authorize = require('../config/authMiddleware');
const { getAllCategorias, getCategoriaById, createCategoria, deleteCategoria, updateCategoria} = require('../controllers/categoriaController');

const router = express.Router();

//Rutas Para cruds categoria
router.get('/categorias', authorize(1), getAllCategorias);
router.get('/categoria/:id', authorize(1), getCategoriaById);
router.post('/categoria', authorize(1), createCategoria);
router.put('/categoria/:id', authorize(1), updateCategoria);
router.delete('/categoria/:id', authorize(1), deleteCategoria);

module.exports = router;