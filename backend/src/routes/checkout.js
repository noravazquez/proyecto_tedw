const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../config/authMiddleware');
const { realizaCompra, concluirProcesoDeCompra } = require('../controllers/checkoutController');

router.post('/realizar-compra',  realizaCompra);
router.get('/ver-compras',  concluirProcesoDeCompra);

module.exports = router;