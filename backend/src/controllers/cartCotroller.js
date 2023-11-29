const Carrito = require('../models/carritos');
const Producto = require('../models/productos');
const DetalleCarrito = require('../models/detallecarritos');
const CuponDescuento = require('../models/cupondescuentos');

exports.agregarAlCarrito = async (req, res) => {
  try {
    const { idProducto } = req.params; 
    const { cantidad } = req.body;

    if (!req.user || !req.user.id_carrito) {
      return res.status(400).json({ error: 'Usuario no autenticado o carrito no encontrado' });
    }

    // Verificar si el producto ya está en el carrito del usuario
    let detalleCarrito = await DetalleCarrito.findOne({
      where: {
        id_carrito: req.user.id_carrito, 
        id_producto: idProducto,
      },
    });

    //Agrega carrito
    if (detalleCarrito) {
      detalleCarrito.cantidad += cantidad;
      await detalleCarrito.save();
    } else {
      detalleCarrito = await DetalleCarrito.create({
        id_carrito: req.user.id_carrito,
        id_producto: idProducto,
        cantidad: cantidad,
      });
    }

    //Obtengo carrito y detalles
    const carrito = await Carrito.findByPk(req.user.id_carrito, {
      include: [{
        model: DetalleCarrito,
        include: [Producto],
      }],
    });

    //Devuelvo carrito
    res.json({ message: 'Producto agregado al carrito de compra', carrito });
  } catch (error) {
    console.error('Error al agregar producto al carrito:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

exports.obtenerCarrito = async (req, res) => {
  try {
    const carrito = await Carrito.findByPk(req.user.id_carrito, {
      include: [{
        model: DetalleCarrito,
        include: [Producto],
      }],
    });

    if (carrito) {
      let totalCarrito = 0;

      // Calcular el total del carrito
      for (const detalleCarrito of carrito.DetalleCarritos) {
        const totalProducto = detalleCarrito.cantidad * detalleCarrito.Producto.precio;
        totalCarrito += totalProducto;
      }

      // Actualizar el total
      await carrito.update({ total: totalCarrito });

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
    const { codigo_unico  } = req.body;

    // Busca el cupón por código
    const cupon = await CuponDescuento.findOne({
      where: { codigo_unico: codigo_unico  },
    });

    if (!cupon) {
      return res.status(404).json({ error: 'Cupón no encontrado' });
    }

    // Obtén el carrito del usuario
    const carrito = await Carrito.findByPk(req.user.id_carrito, {
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

    // Actualiza el total
    await carrito.update({ total: totalCarritoConDescuento });

    res.json({ message: 'Cupón aplicado correctamente', carrito });
  } catch (error) {
    console.error('Error al aplicar el cupón:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};