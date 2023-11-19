const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Carrito = require('./Carrito');
const Producto = require('./Producto');

const DetalleCarrito = sequelize.define('DetalleCarrito', {
  id_detalle_carrito: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  cantidad: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  id_carrito: { 
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  id_producto: { 
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

DetalleCarrito.belongsTo(Carrito, { foreignKey: 'id_carrito', onDelete: 'CASCADE' });
DetalleCarrito.belongsTo(Producto, { foreignKey: 'id_producto', onDelete: 'CASCADE' });

module.exports = DetalleCarrito;
