const express = require('express');
const passport = require('passport');
const { obtenerProductos } = require('../controllers/productController');

const router = express.Router();

router.get('/products', obtenerProductos);
//router.post('/login', passport.authenticate('local'), loginUser);
//router.get('/logout', logoutUser);


module.exports = router;