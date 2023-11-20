exports.aplicarCuponDescuento = async (req, res) => {
    try {
      const { cuponCodigo } = req.body; 
      const montoTotal = /* Obtener el monto total de la compra */1;
      const { nuevoMontoTotal, descuentoAplicado } = await aplicarDescuentoConCupon(cuponCodigo, montoTotal);

      res.json({
        message: 'Cupón aplicado correctamente',
        nuevoMontoTotal,
        descuentoAplicado,
      });
    } catch (error) {
      console.error('Error al aplicar cupón de descuento:', error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  };

  exports.realizarCompra = async (req, res) => {
    try {
      const { idCliente, idDireccionEnvio, idDireccionFacturacion, idMetodoPago, idCarrito } = req.body;
      const nuevaOrden = await realizarCompra(
        idCliente, idDireccionEnvio, idDireccionFacturacion, idMetodoPago, idCarrito);
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


// Método para aplicar el descuento del cupón
const aplicarDescuentoConCupon = async (cuponCodigo, montoTotal) => {
  const cuponDescuento = await CuponDescuento.findOne({ where: { codigo_unico: cuponCodigo } });
  if (!cuponDescuento) {
    throw new Error('Cupón no válido');
  }
  const descuentoAplicado = montoTotal * (cuponDescuento.descuento / 100);
  const nuevoMontoTotal = montoTotal - descuentoAplicado;
  return {
    nuevoMontoTotal,
    descuentoAplicado,
  };
};

// Método para agregar la orden
const realizarCompra = async (idCliente, idDireccionEnvio, idDireccionFacturacion, idMetodoPago, idCarrito) => {
  const nuevaOrden = await OrdenCompra.create({
    fecha: new Date(),
    estado_orden: 'En proceso',
    id_cliente: idCliente,
    id_direccion_envio: idDireccionEnvio,
    id_direccion_facturacion: idDireccionFacturacion,
    id_metodo_pago: idMetodoPago,
    id_carrito: idCarrito,
  });
  return nuevaOrden;
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