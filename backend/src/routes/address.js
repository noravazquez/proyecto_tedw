const express = require('express');
const router = express.Router();
const { obtenerDirecciones, actualizarDirecciones } = require('../controllers/addressController');

router.get('/direcciones', obtenerDirecciones);
router.post('/actualizar-direcciones', actualizarDirecciones);

module.exports = router;