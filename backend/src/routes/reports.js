const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../config/authMiddleware');
const { totalVentasAnual, estadisticasClientes, totalVentasMensual ,totalVentasSemanal} = require('../controllers/reportsController');

router.get('/total-ventas-anual', totalVentasAnual);
router.get('/estadisticas-clientes', estadisticasClientes);
router.get('/total-ventas-mensual', totalVentasMensual);
router.get('/total-ventas-semanal', totalVentasSemanal);

module.exports = router;