const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Cliente = require('./Cliente');

const Usuario = sequelize.define('Usuario', {
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
});

Usuario.hasOne(Cliente, { foreignKey: 'id_usuario' });

module.exports = Usuario;