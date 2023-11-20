const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../config/authMiddleware');
const { aplicarCuponDescuento } = require('../controllers/checkoutController');
const { realizarCompra } = require('../controllers/checkoutController');

router.post('/aplicar-cupon', ensureAuthenticated, aplicarCuponDescuento);
router.post('/realizar-compra', ensureAuthenticated, realizarCompra);

module.exports = router;