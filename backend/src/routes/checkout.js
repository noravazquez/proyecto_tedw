const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../config/authMiddleware');
const { registraCompra, concluirProcesoDeCompra } = require('../controllers/checkoutController');

router.post('/realizar-compra',  registraCompra);
router.get('/ver-compras',  concluirProcesoDeCompra);

module.exports = router;