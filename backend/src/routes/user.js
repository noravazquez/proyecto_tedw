const express = require('express');
const authorize = require('../config/authMiddleware');
const { getUserInfo, getUserOrders, generateOrderChart, updateClientInfo, updateUserInfo, registerClient } = require('../controllers/userController');

const router = express.Router();

/*router.get('/profile', authorize(2), getUserInfo);
router.post('/datos', authorize(2),registerClient)
router.get('/orders', authorize(2), getUserOrders);
router.get('/order-chart', authorize(2), generateOrderChart);
router.patch('/info-client', authorize(2), updateClientInfo);
router.patch('/info-user', authorize(2), updateUserInfo);*/ 

router.get('/profile', getUserInfo);
router.post('/datos',registerClient)
router.get('/orders', getUserOrders);
router.get('/order-chart', generateOrderChart);
router.patch('/info-client', updateClientInfo);
router.patch('/info-user', updateUserInfo); 

module.exports = router;