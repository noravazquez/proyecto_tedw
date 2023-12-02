const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../config/authMiddleware');
const { totalVentas, estadisticasClientes, generarGraficoVentas } = require('../controllers/reportsController');

/*router.get('/total-ventas', totalVentas);
router.get('/estadisticas-clientes', estadisticasClientes);
router.get('/generar-grafico-ventas', generarGraficoVentas);*/

module.exports = router;