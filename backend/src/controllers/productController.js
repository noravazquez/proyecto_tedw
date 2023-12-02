const Producto = require('../models/productos')
const Categoria = require('../models/categorias')
const Proveedor = require('../models/proveedors');
const { Sequelize } = require('sequelize');

exports.obtenerProductos = async (req, res) =>{
    try {
        const productos=await Producto.findAll({
          include: [Categoria, Proveedor]
        });
        res.json({productos});
    } catch (error) {
        console.error('Error al obtener productos:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

exports.obtenerDetalleProducto = async (req, res) => {
    try {
      const { idProducto } = req.params;
      const producto = await Producto.findByPk(idProducto, {
        include: [Categoria, Proveedor],
      });
  
      if (!producto) {
        return res.status(404).json({ error: 'Producto no encontrado' });
      }
  
      res.json({ producto });
    } catch (error) {
      console.error('Error al obtener detalles del producto:', error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  };

  exports.getAllProductos = async (req, res) => {
      try {
        const productos = await Producto.findAll();
        res.json({ productos });
      } catch (error) {
        console.error('Error al obtener productos:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
      }
    };
  
    exports.getProductoById= async (req, res) => {
      try {
        const { id } = req.params;
        const producto = await Producto.findByPk(id, {
          include: [Categoria, Proveedor],
        });
  
        if (!producto) {
          return res.status(404).json({ error: 'Producto no encontrado' });
        }
  
        res.json({ producto });
      } catch (error) {
        console.error('Error al obtener detalles del producto:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
      }
    },
  
    exports.createProducto= async (req, res) => {
      try {
        const {  producto, descripcion, precio, stock, imagenes, id_categoria, id_proveedor } = req.body;
  
        const nuevoProducto = await Producto.create({
          producto, descripcion, precio, stock, imagenes, id_categoria, id_proveedor
        });
  
        res.json({ nuevoProducto });
      } catch (error) {
        console.error('Error al crear un nuevo producto:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
      }
    },
  
    exports.updateProducto= async (req, res) => {
      try {
        const { id } = req.params;
        const {  producto, descripcion, precio, stock, imagenes, id_categoria, id_proveedor } = req.body;
  
        const productoActualizado = await Producto.update(
          {  producto, descripcion, precio, stock, imagenes, id_categoria, id_proveedor },
          { where: { id } }
        );
  
        if (productoActualizado[0] === 0) {
          return res.status(404).json({ error: 'Producto no encontrado' });
        }
  
        res.json({ mensaje: 'Producto actualizado correctamente' });
      } catch (error) {
        console.error('Error al actualizar un producto:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
      }
    },
  
    exports.deleteProducto= async (req, res) => {
      try {
        const { id } = req.params;
  
        const resultado = await Producto.destroy({ where: { id } });
  
        if (!resultado) {
          return res.status(404).json({ error: 'Producto no encontrado' });
        }
  
        res.json({ mensaje: 'Producto eliminado correctamente' });
      } catch (error) {
        console.error('Error al eliminar un producto:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
      }
    }

    exports.totalProductosByCategoria = async (req, res) => {
      try {
        const totalByCategoria = await Producto.findAll(
          {
            attributes: [
              [Sequelize.fn('COUNT', Sequelize.col('id_producto')), 'totalProductos']
            ],
            include: [
              {
                model: Categoria,
                attributes: ['id_categoria', 'categoria']
              }
            ],
            group: ['Categorium.id_categoria']
          }
        );
        res.json({totalByCategoria});
      } catch (error) {
        console.error('Error al calcular el total de productos por categoria',error);
        res.status(500).json({error: "Error interno del servidor"})
      }
    }
