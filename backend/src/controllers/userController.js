const sequelize  = require('sequelize');
const bcrypt = require('bcrypt');
  const Cliente = require('../models/clientes');
  const Carrito = require('../models/carritos');
  const Producto = require('../models/productos');
  const Direccion = require('../models/direccions');
  const OrdenCompra  = require('../models/ordencompras');
  const Usuario = require('../models/usuarios');
  const UsuarioRol = require('../models/usuariorols');
  const Rol = require('../models/rols');
  const DetalleCarrito = require('../models/detallecarritos');
  const MetodoPago = require('../models/metodopagos');
  const CuponDescuento = require('../models/cupondescuentos');

  // Ver datos de facturación y envío
  exports.getUserInfo = async (req, res) => {
    try {
      const cliente = await Cliente.findAll({
        where: { id_usuario: req.user.id_usuario },
        include: [{ model: Direccion }, 
          { 
          model: Usuario,
          include:[{ 
            model: UsuarioRol,
            include:[{model:Rol}]
          }]
          }],
      });
      if (!cliente) {
        return res.status(404).json({ message: 'Cliente no encontrado' });
      }
      res.json({ clientInfo: cliente });
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
    
    // Validar el formato del correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(correo)) {
      return res.status(400).json({ error: 'Formato de correo electrónico inválido' });
    }

    try {
      const usuarioBD = await Usuario.findByPk(req.user.id_usuario);

      if (!usuarioBD) {
        return res.status(404).json({ message: 'Usuario no encontrado' });
      }

      const hashedPassword = await bcrypt.hash(contrasena, 10);
      // Actualizar los datos del usuario
      await usuarioBD.update({
        usuario: usuario,
        correo:correo,
        contrasena:hashedPassword,
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
      const client = await Cliente.findOne({
        where: { id_usuario: req.user.id_usuario },
      });
  
      if (!client) {
        return res.status(404).json({ message: 'Cliente no encontrado' });
      }

      const orders = await OrdenCompra.findAll({
        where: { id_cliente: client.id_cliente },
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
            [sequelize.Op.between]: [new Date(`${currentYear}-01-01`), new Date(`${currentYear}-12-31`)],
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

  exports.getAllUsuarios= async (req, res) => {
      try {
        const usuarios = await Usuario.findAll();
        res.json({ usuarios });
      } catch (error) {
        console.error('Error al obtener usuarios:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
      }
    },
  
    exports.getUsuarioById= async (req, res) => {
      try {
        const { id } = req.params;
        const usuario = await Usuario.findByPk(id);
  
        if (!usuario) {
          return res.status(404).json({ error: 'Usuario no encontrado' });
        }
  
        res.json({ usuario });
      } catch (error) {
        console.error('Error al obtener detalles del usuario:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
      }
    },
  
    exports.createUsuario= async (req, res) => {
      try {
        const { nombre, email, contraseña } = req.body;
  
        const nuevoUsuario = await Usuario.create({
          nombre,
          email,
          contraseña, // Asegúrate de manejar la seguridad de la contraseña correctamente (hashing, etc.).
        });
  
        res.json({ nuevoUsuario });
      } catch (error) {
        console.error('Error al crear un nuevo usuario:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
      }
    },
  
    exports.updateUsuario= async (req, res) => {
      try {
        const { id } = req.params;
        const { nombre, email, contraseña } = req.body;
  
        const usuarioActualizado = await Usuario.update(
          { nombre, email, contraseña },
          { where: { id } }
        );
  
        if (usuarioActualizado[0] === 0) {
          return res.status(404).json({ error: 'Usuario no encontrado' });
        }
  
        res.json({ mensaje: 'Usuario actualizado correctamente' });
      } catch (error) {
        console.error('Error al actualizar un usuario:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
      }
    },
  
    exports.deleteUsuario= async (req, res) => {
      try {
        const { id } = req.params;
  
        const resultado = await Usuario.destroy({ where: { id } });
  
        if (!resultado) {
          return res.status(404).json({ error: 'Usuario no encontrado' });
        }
  
        res.json({ mensaje: 'Usuario eliminado correctamente' });
      } catch (error) {
        console.error('Error al eliminar un usuario:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
      }
    }
  