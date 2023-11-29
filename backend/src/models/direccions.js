const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');
const Cliente = require('./clientes');
const OrdenCompra = require('./ordencompras');

class Direccion extends Model {}

Direccion.init({
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
}, {
  sequelize,
  modelName: 'Direccion',
  tableName: 'direccions', 
});

Direccion.belongsTo(Cliente, { foreignKey: 'id_cliente', onDelete: 'CASCADE' });
Direccion.hasMany(OrdenCompra, { foreignKey: "id_direccion" });

module.exports = Direccion;
