const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Usuario = require('./usuarios');
const Rol = require('./rols');

const UsuarioRol = sequelize.define('UsuarioRol', {
  id_rol: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  id_usuario: {
    type: DataTypes.STRING,
    allowNull: false,
  },
},{
  tableName: 'usuariorols', 
});

UsuarioRol.belongsTo(Usuario, { foreignKey: 'id_usuario' });
UsuarioRol.belongsTo(Rol, { foreignKey: 'id_rol' });

module.exports = UsuarioRol;