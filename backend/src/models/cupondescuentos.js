const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');


class CuponDescuento extends Model {}

CuponDescuento.init({
  id_cupon_descuento: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  codigo_unico: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descuento: {
    type: DataTypes.NUMERIC,
    allowNull: false,
  },
  fecha_vencimiento: {
    type: DataTypes.DATE,
    allowNull: false,
  },
}, {
  sequelize,
  tableName: 'cupondescuentos', 
});


module.exports = CuponDescuento;