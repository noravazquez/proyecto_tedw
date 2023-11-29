const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const UsuarioRol = require('./usuariorols');
const Cliente = require('./clientes');

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
},{
  tableName: 'usuarios', 
});

Usuario.hasMany(Cliente, { foreignKey: "id_usuario"});
Usuario.hasMany(UsuarioRol, { foreignKey: "id_usuario"});

module.exports = Usuario;