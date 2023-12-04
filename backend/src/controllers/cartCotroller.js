const Carrito = require('../models/carritos');
const Cliente = require('../models/clientes');
const Producto = require('../models/productos');
const DetalleCarrito = require('../models/detallecarritos');
const CuponDescuento = require('../models/cupondescuentos');

// Método para calcular el total del carrito
const calcularTotalCarrito = async (idCarrito) => {
  try {
    const carrito = await Carrito.findOne({
      where: { id_carrito: idCarrito },
      include: [{
        model: DetalleCarrito,
        include: [Producto],
      }],
    });

    let total = 0;

    if (carrito && carrito.DetalleCarritos) {
      carrito.DetalleCarritos.forEach((detalle) => {
        total += detalle.cantidad * detalle.Producto.precio;
      });
    }

    return total;
  } catch (error) {
    console.error('Error al calcular el total del carrito:', error);
    throw error;
  }
};


// Método para agregar un producto al carrito
exports.agregarAlCarrito = async (req, res) => {
  try {
    const { idProducto } = req.params;
    const { cantidad } = req.body;

    if (!req.user || !req.user.id_usuario) {
      return res.status(400).json({ error: 'Usuario no autenticado' });
    }

    const cliente = await Cliente.findOne({
      where: { id_usuario: req.user.id_usuario },
    });

    const carrito = await Carrito.findOne({
      where: { id_cliente: cliente.id_cliente },
      include: [{
        model: DetalleCarrito,
        include: [Producto],
      }],
    });

    // Verificar si el producto ya está en el carrito del usuario
    let detalleCarrito = await DetalleCarrito.findOne({
      where: {
        id_carrito: carrito.id_carrito,
        id_producto: idProducto,
      },
    });

    // Agregar al carrito
    if (detalleCarrito) {
      detalleCarrito.cantidad += cantidad;
      await detalleCarrito.save();
    } else {
      detalleCarrito = await DetalleCarrito.create({
        id_carrito: carrito.id_carrito,
        id_producto: idProducto,
        cantidad: cantidad,
      });
    }

    // Calcular el nuevo total del carrito
    const nuevoTotal = await calcularTotalCarrito(carrito.id_carrito);
    carrito.total = nuevoTotal;
    await carrito.save();

    // Devolver carrito con el nuevo total
    res.json({ message: 'Producto agregado al carrito de compra', carrito });
  } catch (error) {
    console.error('Error al agregar producto al carrito:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};


exports.obtenerCarrito = async (req, res) => {
  try {
    const { id } = req.params;
    const cliente = await Cliente.findOne({
      where: { id_usuario: id },
    });

    const carrito = await Carrito.findOne({
      where: { id_cliente: cliente.id_cliente },
      include: [{
        model: DetalleCarrito,
        include: [Producto],
      }],
    });

    if (carrito) {
      res.json({ carrito });
    } else {
      console.error('Carrito no encontrado');
      res.status(404).json({ error: 'Carrito no encontrado' });
    }
  } catch (error) {
    console.error('Error al obtener el carrito:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};


exports.aplicarCuponDescuento = async (req, res) => {
  try {
    const { codigo_unico } = req.body;

    const cupon = await CuponDescuento.findOne({
      where: { codigo_unico: codigo_unico },
    });

    if (!cupon) {
      return res.status(404).json({ error: 'Cupón no encontrado' });
    }

    if (!req.user || !req.user.id_usuario) {
      return res.status(400).json({ error: 'Usuario no autenticado' });
    }

    const cliente = await Cliente.findOne({
      where: { id_usuario: req.user.id_usuario },
    });

    const carrito = await Carrito.findOne({
      where: { id_cliente: cliente.id_cliente },
      include: [{
        model: DetalleCarrito,
        include: [Producto],
      }],
    });


    if (!carrito) {
      console.error('Carrito no encontrado');
      return res.status(404).json({ error: 'Carrito no encontrado' });
    }

    // Aplica el descuento del cupón al total del carrito 
    const descuentoPorcentaje = cupon.descuento / 100;
    const descuentoTotal = carrito.total * descuentoPorcentaje;
    const totalCarritoConDescuento = carrito.total - descuentoTotal;

    // Actualiza el total y el id_cupon_descuento
    await carrito.update({
      total: totalCarritoConDescuento,
      id_cupon_descuento: cupon.id_cupon_descuento,
    });

    res.json({ message: 'Cupón aplicado correctamente', carrito });
  } catch (error) {
    console.error('Error al aplicar el cupón:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};


exports.eliminarDelCarrito = async (req, res) => {
  try {
    const { idProducto } = req.params;

    if (!req.user || !req.user.id_usuario) {
      return res.status(400).json({ error: 'Usuario no autenticado' });
    }

    const cliente = await Cliente.findOne({
      where: { id_usuario: req.user.id_usuario },
    });

    const carrito = await Carrito.findOne({
      where: { id_cliente: cliente.id_cliente },
      include: [{
        model: DetalleCarrito,
        include: [Producto],
      }],
    });

    // Verificar si el producto está en el carrito del usuario
    const detalleCarrito = await DetalleCarrito.findOne({
      where: {
        id_carrito: carrito.id_carrito,
        id_producto: idProducto,
      },
    });

    // Si el producto está en el carrito, eliminarlo
    if (detalleCarrito) {
      await detalleCarrito.destroy();

       // Calcular el nuevo total del carrito
      const nuevoTotal = await calcularTotalCarrito(carrito.id_carrito);
      carrito.total = nuevoTotal;
      await carrito.save();

      res.json({ message: 'Producto eliminado del carrito de compra', carrito });
    } else {
      res.status(404).json({ error: 'Producto no encontrado en el carrito' });
    }
  } catch (error) {
    console.error('Error al eliminar producto del carrito:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

exports.eliminarCantidadDelCarrito = async (req, res) => {
  try {
    const { idProducto } = req.params;

    if (!req.user || !req.user.id_usuario) {
      return res.status(400).json({ error: 'Usuario no autenticado' });
    }

    const cliente = await Cliente.findOne({
      where: { id_usuario: req.user.id_usuario },
    });

    const carrito = await Carrito.findOne({
      where: { id_cliente: cliente.id_cliente },
      include: [{
        model: DetalleCarrito,
        include: [Producto],
      }],
    });

    // Verificar si el producto está en el carrito del usuario
    const detalleCarrito = await DetalleCarrito.findOne({
      where: {
        id_carrito: carrito.id_carrito,
        id_producto: idProducto,
      },
    });

    // Si el producto está en el carrito, reducir la cantidad
    if (detalleCarrito) {
      if (detalleCarrito.cantidad > 1) {
        detalleCarrito.cantidad -= 1;
        await detalleCarrito.save();

        
      } else {
        // Si la cantidad es 1, eliminar el producto del carrito
        await detalleCarrito.destroy();
      }

       // Calcular el nuevo total del carrito
      const nuevoTotal = await calcularTotalCarrito(carrito.id_carrito);
      carrito.total = nuevoTotal;
      await carrito.save();

      res.json({ message: 'Cantidad reducida del producto en el carrito', carrito });
    } else {
      res.status(404).json({ error: 'Producto no encontrado en el carrito' });
    }
  } catch (error) {
    console.error('Error al reducir cantidad del producto en el carrito:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};
