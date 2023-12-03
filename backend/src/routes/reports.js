const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../config/authMiddleware');
const { totalVentasAnual, estadisticasClientes, totalVentasMensual, totalVentasSemanal, totalProductos, totalClientes} = require('../controllers/reportsController');

router.post('/total-ventas-anual', totalVentasAnual);
router.get('/estadisticas-clientes', estadisticasClientes);
router.post('/total-ventas-mensual', totalVentasMensual);
router.get('/total-ventas-semanal', totalVentasSemanal);
router.get('/total-productos-vendidos', totalProductos);
router.get('/total-clientes-registrados', totalClientes);

module.exports = router;