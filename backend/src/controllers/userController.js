const Cliente = require('../models/clientes');
const  Direccion = require('../models/direccions');
const  OrdenCompra  = require('../models/ordencompras');
const Usuario = require('../models/usuarios');

// Ver datos de facturación y envío
exports.getUserInfo = async (req, res) => {
  try {
    const cliente = await Cliente.findAll({
      where: { id_usuario: req.user.id_usuario },
      include: [{ model: Direccion }, { model: Usuario}],
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


//update info client
exports.updateClientInfo = async (req, res) => {
  const { nombre, apellido_paterno, apellido_materno, telefono } = req.body;
  try {
    const cliente = await Cliente.findOne({
      where: { id_usuario: req.user.id_usuario },
    });

    if (!cliente) {
      return res.status(404).json({ message: 'Cliente no encontrado' });
    }

    await cliente.update({
      nombre,
      apellido_paterno,
      apellido_materno,
      telefono,
    });

    res.json({ message: 'Información de cliente actualizada correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar la información del cliente' });
  }
};

exports.updateUserInfo = async (req, res) => {
  const { usuario, correo, contrasena } = req.body;

  try {
    const usuarioBD = await Usuario.findByPk(req.user.id_usuario);

    if (!usuarioBD) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    // Actualizar los datos del usuario
    await usuarioBD.update({
      usuario: usuario,
      correo,
      contrasena,
    });

    res.json({ message: 'Datos de usuario actualizados correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar los datos del usuario' });
  }
};



// Ver ordenes por cliente
exports.getUserOrders = async (req, res) => {
  try {
    const orders = await OrdenCompra.findAll({
      where: { id_cliente: req.user.id_cliente },
      include: [
        {
          model: DetalleCarrito,
          include: [
            {
              model: Carrito,
              include: [
                {model: Cliente,}, {model: CuponDescuento,},
              ],
            },
            {model: Producto,},
          ],
        },
        {model: Direccion,}, {model: MetodoPago,},
      ],
    });

    res.json({ orders });
  } catch (error) {
    console.error(error);
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
        [sequelize.fn('DATE_PART', 'month', sequelize.col('fecha')), 'month'],
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
