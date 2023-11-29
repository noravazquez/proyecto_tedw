const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');

class Rol extends Model {}

Rol.init({
  id_rol: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  rol: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'Rol',
  tableName: 'rols', 
});


module.exports = Rol;
