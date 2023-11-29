const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../config/authMiddleware');
const { obtenerDirecciones, actualizarDirecciones, agregarDireccion, eliminarDireccion } = require('../controllers/addressController');

router.get('/direcciones',  obtenerDirecciones);
router.post('/agregar-direccion',  agregarDireccion );
router.patch('/actualizar-direccion',  actualizarDirecciones);
router.delete('direcciones/:id_direccion', eliminarDireccion);

module.exports = router;