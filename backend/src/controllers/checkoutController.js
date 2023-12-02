const OrdenCompra  = require('../models/ordencompras');
const CuponDescuento = require('../models/cupondescuentos');
const DetalleCarrito  = require('../models/detallecarritos');
const Cliente = require('../models/clientes');
const Carrito  = require('../models/carritos');
const Direccion = require('../models/direccions');
const MetodoPago = require('../models/metodopagos');
const Producto = require('../models/productos');


exports.registraCompra = async (req, res) => {
  try {
    if (!req.user || !req.user.id_usuario) {
      return res.status(400).json({ error: 'Usuario no autenticado' });
    }

    const cliente = await Cliente.findOne({
      where: { id_usuario: req.user.id_usuario },
    });

    if (!cliente) {
      return res.status(404).json({ message: 'Cliente no encontrado' });
    }
    const carrito = await Carrito.findByPk({
      where: {id_cliente:cliente.id_cliente}
    }) 

    const detallecarrito =await DetalleCarrito.findByPk({
      where: {id_carrito: carrito.id_carrito}
    })

    const cupon =await CuponDescuento.findByPk({
      where: {id_cupon_descuento: carrito.id_cupon_descuento}
    })
    
    const producto =await Producto.findByPk({
      where: {id_producto: detallecarrito.id_producto}
    })

    const direccion =await Direccion.findByPk({
      where: {id_direccion: cliente.id_direccion}
    })
    
    const { metodo }= req.body

    const nuevaOrden = await OrdenCompra.create({
      fecha: new Date(),
      estado_orden: 'En proceso',
      id_cliente: cliente.id_cliente,
      id_detalle_carrito: detallecarrito.id_detalle_carrito,
      id_direccion: direccion.id_direccion,
      id_metodo_pago: metodo.id_metodo_pago
    })

    res.json({
      message: 'Compra realizada con éxito',
      nuevaOrden,
    });

  } catch (error) {
    console.error('Error al realizar la compra:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

  exports.concluirProcesoDeCompra = async (req, res) => {
    try {
      const { idOrdenCompra } = req.body;
      const ordenCompraFinalizada = await concluirProcesoDeCompra(idOrdenCompra);
      res.json({
        message: 'Proceso de compra concluido con éxito',
        ordenCompraFinalizada,
      });
    } catch (error) {
      console.error('Error al concluir el proceso de compra:', error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  };


// Método para concluir el proceso de compra y levantar la orden de venta
const concluirProcesoDeCompra = async (idOrdenCompra) => {
  const ordenCompra = await OrdenCompra.findByPk(idOrdenCompra);
  if (!ordenCompra) {
    throw new Error('Orden de compra no encontrada');
  }
  await ordenCompra.update({ estado_orden: 'Completada' });
  return ordenCompra;
};