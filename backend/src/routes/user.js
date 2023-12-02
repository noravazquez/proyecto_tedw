const express = require('express');
const { ensureAuthenticated } = require('../config/authMiddleware');
const { getUserInfo, getUserOrders, generateOrderChart, updateClientInfo, updateUserInfo, registerClient } = require('../controllers/userController');

const router = express.Router();

router.get('/profile',  getUserInfo);
router.post('/datos', registerClient)
router.get('/orders',  getUserOrders);
router.get('/order-chart',  generateOrderChart);
router.patch('/info-client',  updateClientInfo);
router.patch('/info-user',  updateUserInfo); 

module.exports = router;