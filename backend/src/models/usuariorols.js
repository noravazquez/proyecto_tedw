const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');

class UsuarioRol extends Model {}

UsuarioRol.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  id_rol: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  id_usuario: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'UsuarioRol',
  tableName: 'usuariorols', 
});

module.exports = UsuarioRol;