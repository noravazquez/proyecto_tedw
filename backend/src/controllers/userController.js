const Cliente = require('../models/Cliente');
const  Direccion = require('../models/Direccion');
const  OrdenCompra  = require('../models/OrdenCompra');

// Ver datos de cliente
exports.getUserProfile = (req, res) => {
  res.json({ user: req.user });
};

// Ver datos de facturación y envío
exports.getUserBillingInfo = async (req, res) => {
  try {
    const cliente = await Cliente.findOne({
      where: { id_usuario: req.user.id_usuario },
      include: [{ model: Direccion, as: 'DireccionEnvio' }, { model: Direccion, as: 'DireccionFacturacion' }],
    });
    if (!cliente) {
      return res.status(404).json({ message: 'Cliente no encontrado' });
    }
    res.json({ billingInfo: cliente });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener datos de facturación y envío' });
  }
};

// Modificar datos de facturación y envío
exports.updateUserBillingInfo = async (req, res) => {
  try {
    const cliente = await Cliente.findOne({
      where: { id_usuario: req.user.id_usuario },
      include: [{ model: Direccion, as: 'DireccionEnvio' }, { model: Direccion, as: 'DireccionFacturacion' }],
    });
    if (!cliente) {
      return res.status(404).json({ message: 'Cliente no encontrado' });
    }
    await cliente.update(req.body, { include: [{ model: Direccion, as: 'DireccionEnvio' }, { model: Direccion, as: 'DireccionFacturacion' }] });
    res.json({ message: 'Datos de facturación y envío actualizados correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar datos de facturación y envío' });
  }
};

// Ver ordenes por cliente
exports.getUserOrders = async (req, res) => {
  try {
    const orders = await Order.findAll({ where: { id_cliente: req.user.id_cliente } });
    res.json({ orders });
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener historial de pedidos' });
  }
};

//generar grafica por cliente
exports.generateOrderChart = async (req, res) => {
  try {
    const userId = req.user.id_usuario;
    const currentYear = new Date().getFullYear();

    const orderTotals = await OrdenCompra.findAll({
      attributes: [
        [sequelize.fn('date_part', 'month', sequelize.col('fecha')), 'month'],
        [sequelize.fn('count', sequelize.col('id_orden_compra')), 'total'],
      ],
      where: {
        id_cliente: userId,
        fecha: {
          [Sequelize.Op.between]: [new Date(`${currentYear}-01-01`), new Date(`${currentYear}-12-31`)],
        },
      },
      group: [sequelize.fn('date_part', 'month', sequelize.col('fecha'))],
    });
    res.json({ orderTotals });
  } catch (error) {
    console.error('Error al generar el gráfico de pedidos:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};
