const express = require('express');
const { ensureAuthenticated } = require('../config/authMiddleware');
const { getUserInfo, getUserOrders, generateOrderChart,updateClientInfo,updateUserInfo } = require('../controllers/userController');

const router = express.Router();

router.get('/profile', ensureAuthenticated, getUserInfo);
router.get('/orders', ensureAuthenticated, getUserOrders);
router.get('/order-chart', ensureAuthenticated, generateOrderChart);
router.patch('/info-client', ensureAuthenticated, updateClientInfo);
router.patch('/info-user', ensureAuthenticated, updateUserInfo);

module.exports = router;