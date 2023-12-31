const express = require('express');
const router = express.Router();
const authorize = require('../config/authMiddleware');
const { registraCompra, concluirProcesoDeCompra } = require('../controllers/checkoutController');

router.post('/realizar-compra', authorize(2),  registraCompra);
router.get('/ver-compras/:idOrdenCompra',  authorize(2), concluirProcesoDeCompra);


module.exports = router;