const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const OrdenCompra = require('./ordencompras');

const MetodoPago = sequelize.define('MetodoPago', {
  id_metodo_pago: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  metodo_pago: {
    type: DataTypes.STRING,
    allowNull: false,
  },
},{
  tableName: 'metodopagos', 
});

MetodoPago.hasMany(OrdenCompra, { foreignKey: "id_metodo_pago"});

module.exports = MetodoPago;
