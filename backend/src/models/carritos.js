const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');


class Carrito extends Model {}

Carrito.init({
  id_carrito: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  total: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
  id_cliente: { 
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  id_cupon_descuento: { 
    type: DataTypes.INTEGER,
    allowNull: true,
  },
}, {
  sequelize,
  tableName: 'carritos', 
});


module.exports = Carrito;
