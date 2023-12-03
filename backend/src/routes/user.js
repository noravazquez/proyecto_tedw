const express = require('express');
const { ensureAuthenticated } = require('../config/authMiddleware');
const { getUserInfo, getUserOrders, generateOrderChart, updateClientInfo, updateUserInfo, registerClient } = require('../controllers/userController');

const router = express.Router();

router.get('/profile', authorize(2), getUserInfo);
router.post('/datos', authorize(2),registerClient)
router.get('/orders', authorize(2), getUserOrders);
router.get('/order-chart', authorize(2), generateOrderChart);
router.patch('/info-client', authorize(2), updateClientInfo);
router.patch('/info-user', authorize(2), updateUserInfo); 

module.exports = router;