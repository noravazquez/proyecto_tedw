const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');
const Usuario = require('./usuarios');
const Carrito = require('./carritos');
const Direccion = require('./direccions');
const OrdenCompra = require('./ordencompras');

class Cliente extends Model {}

Cliente.init({
  id_cliente: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  apellido_paterno: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  apellido_materno: { 
    type: DataTypes.STRING,
    allowNull: false,
  },
  telefono: {
    type: DataTypes.STRING,
  },
  id_usuario: { 
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'Cliente',
  tableName: 'clientes', 
});

Cliente.belongsTo(Usuario, { foreignKey: 'id_usuario', onDelete: 'CASCADE' });
Cliente.hasMany(Carrito, { foreignKey: 'id_cliente' });
Cliente.hasMany(Direccion, { foreignKey: 'id_cliente' });
Cliente.hasMany(OrdenCompra, { foreignKey: 'id_cliente' });

module.exports = Cliente;
