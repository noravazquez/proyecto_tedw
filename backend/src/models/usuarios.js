const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');

class Usuario extends Model {}

Usuario.init({
  id_usuario: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  usuario: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  correo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  contrasena: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'Usuario',
  tableName: 'usuarios', 
});

module.exports = Usuario;
