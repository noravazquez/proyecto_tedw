const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');
const UsuarioRol = require('./usuariorols');

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

Rol.hasMany(UsuarioRol, { foreignKey: "id_rol" });

module.exports = Rol;
