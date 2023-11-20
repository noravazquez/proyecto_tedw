const express = require('express');
const { obtenerProductos } = require('../controllers/productController');

const router = express.Router();

router.get('/products', obtenerProductos);

module.exports = router;