const Carrito = require('../models/Carrito');
const DetalleCarrito = require('../models/DetalleCarrito');

exports.agregarAlCarrito = async (req, res) => {
  try {
    const { idProducto } = req.params; 
    const { cantidad } = req.body;

    // Verificar si el producto ya está en el carrito del usuario
    let detalleCarrito = await DetalleCarrito.findOne({
      where: {
        id_carrito: req.user.id_carrito, 
        id_producto: idProducto,
      },
    });

    if (detalleCarrito) {
      // Si el producto ya está en el carrito, actualiza la cantidad
      detalleCarrito.cantidad += cantidad;
      await detalleCarrito.save();
    } else {
      // Si el producto no está en el carrito, crea un nuevo registro
      detalleCarrito = await DetalleCarrito.create({
        id_carrito: req.user.id_carrito,
        id_producto: idProducto,
        cantidad: cantidad,
      });
    }

    // Actualizar el total del carrito (puedes implementar esta lógica según tus modelos)
    const carrito = await Carrito.findByPk(req.user.id_carrito, {
      include: [{
        model: DetalleCarrito,
        include: [Producto],
      }],
    });

    if (carrito) {
      let totalCarrito = 0;

      for (const detalleCarrito of carrito.DetalleCarritos) {
        const totalProducto = detalleCarrito.cantidad * detalleCarrito.Producto.precio;
        totalCarrito += totalProducto;
      }
      await carrito.update({ total: totalCarrito });

    } else {
      console.error('Carrito no encontrado');
      res.status(404).json({ error: 'Carrito no encontrado' });
    }

    res.json({ message: 'Producto agregado al carrito de compra', carrito });
  } catch (error) {
    console.error('Error al agregar producto al carrito:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};