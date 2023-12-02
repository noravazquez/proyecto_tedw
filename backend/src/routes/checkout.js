const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../config/authMiddleware');
const { realizarCompra, concluirProcesoDeCompra } = require('../controllers/checkoutController');

router.post('/realizar-compra',  realizarCompra);
router.get('/ver-compras',  concluirProcesoDeCompra);

module.exports = router;