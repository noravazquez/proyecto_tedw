const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../config/authMiddleware');
const { obtenerDirecciones, actualizarDirecciones, agregarDireccion } = require('../controllers/addressController');

router.get('/direcciones',  obtenerDirecciones);
router.post('/agregar-direccion',  agregarDireccion );
router.patch('/actualizar-direccion',  actualizarDirecciones);

module.exports = router;