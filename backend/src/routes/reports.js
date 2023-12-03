const express = require('express');
const router = express.Router();
const authorize = require('../config/authMiddleware');
const { totalVentasAnual, estadisticasClientes, totalVentasMensual, totalVentasSemanal, totalProductos, totalClientes} = require('../controllers/reportsController');

/*router.post('/total-ventas-anual', authorize(1), totalVentasAnual);
router.get('/estadisticas-clientes', authorize(1), estadisticasClientes);
router.post('/total-ventas-mensual', authorize(1), totalVentasMensual);
router.get('/total-ventas-semanal', authorize(1), totalVentasSemanal);
router.get('/total-productos-vendidos', authorize(1), totalProductos);
router.get('/total-clientes-registrados', authorize(1), totalClientes);*/

router.post('/total-ventas-anual', totalVentasAnual);
router.get('/estadisticas-clientes', estadisticasClientes);
router.post('/total-ventas-mensual', totalVentasMensual);
router.get('/total-ventas-semanal', totalVentasSemanal);
router.get('/total-productos-vendidos', totalProductos);
router.get('/total-clientes-registrados', totalClientes);

module.exports = router;