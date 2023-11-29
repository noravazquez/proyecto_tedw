const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');


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

module.exports = DetalleCarrito;
