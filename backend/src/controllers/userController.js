const { Usuario, Carrito, Cliente,Direccion, UsuarioRol,Rol,DetalleCarrito, OrdenCompra} = require('../models');

exports.getUserProfile = (req, res) => {
  res.json({ user: req.user });
};

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

    // Actualiza los datos según lo que se reciba en el cuerpo de la solicitud (req.body)
    await cliente.update(req.body, { include: [{ model: Direccion, as: 'DireccionEnvio' }, { model: Direccion, as: 'DireccionFacturacion' }] });

    res.json({ message: 'Datos de facturación y envío actualizados correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar datos de facturación y envío' });
  }
};

exports.getUserOrders = async (req, res) => {
  try {
    const orders = await Order.findAll({ where: { id_cliente: req.user.id_cliente } });
    res.json({ orders });
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener historial de pedidos' });
  }
};

exports.generateOrderChart = async (req, res) => {
  try {
    // Genera grafica c:
    //res.json({ chartData: 'ChartDataGoesHere' });
  } catch (error) {
    res.status(500).json({ error: 'Error al generar el gráfico' });
  }
};
