const express = require('express');
const router = express.Router();
const { aplicarCuponDescuento } = require('../controllers/checkoutController');

router.post('/aplicar-cupon', aplicarCuponDescuento);
router.post('/realizar-compra', realizarCompra);

module.exports = router;