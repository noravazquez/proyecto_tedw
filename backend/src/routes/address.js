const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../config/authMiddleware');
const { obtenerDirecciones, actualizarDirecciones } = require('../controllers/addressController');

router.get('/direcciones', ensureAuthenticated, obtenerDirecciones);
router.post('/actualizar-direcciones', ensureAuthenticated, actualizarDirecciones);

module.exports = router;