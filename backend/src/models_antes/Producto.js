const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Categoria = require('./Categoria');
const Proveedor = require('./Proveedor');


const Producto = sequelize.define('Producto', {
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
});

Producto.belongsTo(Categoria, { foreignKey: 'id_categoria', onDelete: 'CASCADE' });
Producto.belongsTo(Proveedor, { foreignKey: 'id_proveedor', onDelete: 'CASCADE' });

module.exports = Producto;
