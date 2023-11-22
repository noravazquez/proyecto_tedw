const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../config/authMiddleware');
const { realizarCompra } = require('../controllers/checkoutController');

router.post('/realizar-compra', ensureAuthenticated, realizarCompra);

module.exports = router;