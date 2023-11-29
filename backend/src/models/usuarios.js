const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');
const UsuarioRol = require('./usuariorols');
const Cliente = require('./clientes');

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

Usuario.hasMany(Cliente, { foreignKey: "id_usuario" });
Usuario.hasMany(UsuarioRol, { foreignKey: "id_usuario" });

module.exports = Usuario;
