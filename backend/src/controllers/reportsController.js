//const  OrdenCompra  = require('../models/OrdenCompra');
//const  DetalleCarrito = require('../models/DetalleCarrito');
//const  Cliente = require('../models/Cliente');

// Reporte Total de ventas semanales, mensuales y anuales
exports.totalVentas = async (req, res) => {
  try {
    const userId = req.user.id_usuario; 

    const ventasSemanales = await calcularTotalVentas(userId, 'week');
    const ventasMensuales = await calcularTotalVentas(userId, 'month');
    const ventasAnuales = await calcularTotalVentas(userId, 'year');

    res.json({
      ventasSemanales,
      ventasMensuales,
      ventasAnuales,
    });
  } catch (error) {
    console.error('Error al calcular las ventas totales:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

// Reporte Total clientes, ordenes y productos comprados
exports.estadisticasClientes = async (req, res) => {
    try {
      const totalClientes = await Cliente.count();
      const totalOrdenes = await OrdenCompra.count();
      const totalProductosComprados = await DetalleCarrito.sum('cantidad');
  
      res.json({
        totalClientes,
        totalOrdenes,
        totalProductosComprados,
      });
    } catch (error) {
      console.error('Error al calcular las estadísticas de clientes:', error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  };
  
  //Graficos de reportes de ventas
  exports.generarGraficoVentas = async (req, res) => {
      try {
        const userId = req.user.id_usuario; 
        const datosGrafico = await calcularTotalVentas(userId, 'month');
        res.json({ datosGrafico });
      } catch (error) {
        console.error('Error al generar el gráfico de ventas:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
      }
    };


 // Calcula el total de ventas por cliente
async function calcularTotalVentas(userId, intervaloTiempo) {
  const resultado = await OrdenCompra.findAll({
    attributes: [
      [sequelize.fn('date_trunc', intervaloTiempo, sequelize.col('fecha')), 'intervalo'],
      [sequelize.fn('sum', sequelize.col('total')), 'total_ventas'],
    ],
    where: {
      id_cliente: userId,
    },
    group: [sequelize.fn('date_trunc', intervaloTiempo, sequelize.col('fecha'))],
  });

  return resultado;
}