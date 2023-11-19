const express = require('express');
const router = express.Router();

router.get('/products', (req, res) => {
  res.json({ message: 'Obtener todos los productos' });
});

router.post('/add-to-cart', (req, res) => {
  res.json({ message: 'Producto agregado al carrito de compra' });
});

module.exports = router;