const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../config/authMiddleware');
const { totalVentas, estadisticasClientes, generarGraficoVentas } = require('../controllers/reportsController');

router.get('/total-ventas', ensureAuthenticated, totalVentas);
router.get('/estadisticas-clientes', ensureAuthenticated, estadisticasClientes);
router.get('/generar-grafico-ventas', ensureAuthenticated, generarGraficoVentas);

module.exports = router;