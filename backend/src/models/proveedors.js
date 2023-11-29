const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');
const Producto = require('./productos');

class Proveedor extends Model {}

Proveedor.init({
  id_proveedor: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  proveedor: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  telefono: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  correo_electronico: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'Proveedor',
  tableName: 'proveedors', 
});

Proveedor.hasMany(Producto, { foreignKey: "id_proveedor"});

module.exports = Proveedor;
