const Categoria = require('../models/categorias');
const Proveedor = require('../models/proveedors');
const MetodoPago = require('../models/metodopagos');
const Cupones = require('../models/cupondescuentos')

exports.getAllCategorias = async (req, res) => {
  try {
    const categorias = await Categoria.findAll();
    res.json({ categorias });
  } catch (error) {
    console.error('Error al obtener categorías:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

exports.getCategoriaById= async (req, res) => {
  try {
    const { id } = req.params;
    const categoria = await Categoria.findByPk(id);

    if (!categoria) {
      return res.status(404).json({ error: 'Categoría no encontrada' });
    }

    res.json({ categoria });
  } catch (error) {
    console.error('Error al obtener detalles de la categoría:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

exports.createCategoria = async (req, res) => {
  try {
    const { nombre } = req.body;

    const nuevaCategoria = await Categoria.create({
      nombre,
    });

    res.json({ nuevaCategoria });
  } catch (error) {
    console.error('Error al crear una nueva categoría:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

exports.updateCategoria = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre } = req.body;

    const categoriaActualizada = await Categoria.update(
      { nombre },
      { where: { id } }
    );

    if (categoriaActualizada[0] === 0) {
      return res.status(404).json({ error: 'Categoría no encontrada' });
    }

    res.json({ mensaje: 'Categoría actualizada correctamente' });
  } catch (error) {
    console.error('Error al actualizar una categoría:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

exports.deleteCategoria = async (req, res) => {
  try {
    const { id } = req.params;

    const resultado = await Categoria.destroy({ where: { id } });

    if (!resultado) {
      return res.status(404).json({ error: 'Categoría no encontrada' });
    }

    res.json({ mensaje: 'Categoría eliminada correctamente' });
  } catch (error) {
    console.error('Error al eliminar una categoría:', error);
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

      res.json({ message: 'Cantidad reducida del producto en el carrito', carrito });
    } else {
      res.status(404).json({ error: 'Producto no encontrado en el carrito' });
    }
  } catch (error) {
    console.error('Error al reducir cantidad del producto en el carrito:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

exports.getAllProveedores = async (req, res) => {
  try {
    const proveedors = await Proveedor.findAll();
    res.json({ proveedors });
  } catch (error) {
    console.error('Error al obtener proveedores:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

exports.getAllMetodosPago = async (req, res) => {
  try {
    const metodopagos = await MetodoPago.findAll();
    res.json({ metodopagos });
  } catch (error) {
    console.error('Error al obtener metodos:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

exports.getAllCupones = async (req, res) => {
  try {
    const cupondescuentos = await Cupones.findAll();
    res.json({ cupondescuentos });
  } catch (error) {
    console.error('Error al obtener cupones:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};