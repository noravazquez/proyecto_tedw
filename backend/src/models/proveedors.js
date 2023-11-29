const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Producto = require('./productos');

const Proveedor = sequelize.define('Proveedor', {
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
},{
  tableName: 'proveedors', 
});

Proveedor.hasMany(Producto, { foreignKey: "id_proveedor"});

module.exports = Proveedor;