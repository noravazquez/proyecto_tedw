const express = require('express');
const { ensureAuthenticated } = require('../middlewares/authMiddleware');
const { getUserProfile, getUserOrders, generateOrderChart } = require('../controllers/userController');

const router = express.Router();

router.get('/profile', ensureAuthenticated, getUserProfile);
router.get('/orders', ensureAuthenticated, getUserOrders);
router.get('/order-chart', ensureAuthenticated, generateOrderChart);

module.exports = router;