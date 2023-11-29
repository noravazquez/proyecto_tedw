const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');
const Carrito = require('./carritos');
const Producto = require('./productos');
const OrdenCompra = require('./ordencompras');

class DetalleCarrito extends Model {}

DetalleCarrito.init({
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
}, {
  sequelize,
  modelName: 'DetalleCarrito',
  tableName: 'detallecarritos', 
});

DetalleCarrito.belongsTo(Carrito, { foreignKey: 'id_carrito', onDelete: 'CASCADE' });
DetalleCarrito.belongsTo(Producto, { foreignKey: 'id_producto', onDelete: 'CASCADE' });
DetalleCarrito.hasMany(OrdenCompra, { foreignKey: "id_detalle_carrito" });

module.exports = DetalleCarrito;
