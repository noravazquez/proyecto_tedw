const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Cliente = require('./clientes');
const OrdenCompra = require('./ordencompras');

const Direccion = sequelize.define('Direccion', {
  id_direccion: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  calle: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  ciudad: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  estado: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  codigo_postal: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  pais: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  id_cliente: { 
    type: DataTypes.INTEGER,
    allowNull: false,
  },
},{
  tableName: 'direccions', 
});

Direccion.belongsTo(Cliente, { foreignKey: 'id_cliente', onDelete: 'CASCADE' });
Direccion.hasMany(OrdenCompra, { foreignKey: "id_direccion"});

module.exports = Direccion;