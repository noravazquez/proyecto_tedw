const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');
const Categoria = require('./categorias');
const Proveedor = require('./proveedors');
const DetalleCarrito = require('./detallecarritos');

class Producto extends Model {}

Producto.init({
  id_producto: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  producto: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  precio: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  imagenes: {
    type: DataTypes.JSON,
  },
  id_categoria: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  id_proveedor: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'Producto',
  tableName: 'productos', 
});

Producto.belongsTo(Categoria, { foreignKey: 'id_categoria', onDelete: 'CASCADE' });
Producto.hasMany(DetalleCarrito, { foreignKey: "id_producto"});
Producto.belongsTo(Proveedor, { foreignKey: 'id_proveedor', onDelete: 'CASCADE' });

module.exports = Producto;
