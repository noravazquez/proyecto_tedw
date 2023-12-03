const express = require('express');
const router = express.Router();
const authorize = require('../config/authMiddleware');
const { obtenerDirecciones, actualizarDirecciones, agregarDireccion, eliminarDireccion } = require('../controllers/addressController');

router.get('/direcciones', authorize(2),  obtenerDirecciones);
router.post('/agregar-direccion', authorize(2),  agregarDireccion );
router.patch('/actualizar-direccion', authorize(2),  actualizarDirecciones);
router.delete('/clientes/:clienteId/direcciones/:id_direccion', authorize(2), eliminarDireccion);

module.exports = router;