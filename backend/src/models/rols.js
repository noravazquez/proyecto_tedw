const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const UsuarioRol = require('./usuariorols');

const Rol = sequelize.define('Rol', {
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
},{
  tableName: 'rols', 
});

Rol.hasMany(UsuarioRol, { foreignKey: "id_rol" });

module.exports = Rol;