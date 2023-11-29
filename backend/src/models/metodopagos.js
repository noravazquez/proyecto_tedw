const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');
const OrdenCompra = require('./ordencompras');

class MetodoPago extends Model {}

MetodoPago.init({
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
}, {
  sequelize,
  modelName: 'MetodoPago',
  tableName: 'metodopagos', 
});

MetodoPago.hasMany(OrdenCompra, { foreignKey: "id_metodo_pago" });

module.exports = MetodoPago;
