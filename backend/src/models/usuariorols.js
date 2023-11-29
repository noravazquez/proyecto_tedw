const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');
const Usuario = require('./usuarios');
const Rol = require('./rols');

class UsuarioRol extends Model {}

UsuarioRol.init({
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

UsuarioRol.belongsTo(Usuario, { foreignKey: 'id_usuario' });
UsuarioRol.belongsTo(Rol, { foreignKey: 'id_rol' });

module.exports = UsuarioRol;
