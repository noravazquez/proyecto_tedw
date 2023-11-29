const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');

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


module.exports = MetodoPago;
