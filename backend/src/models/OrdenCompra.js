const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Cliente = require('./Cliente');
const Carrito = require('./Carrito');
const Direccion = require('./Direccion');
const MetodoPago = require('./MetodoPago');

const OrdenCompra = sequelize.define('OrdenCompra', {
  id_orden_compra: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  fecha: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  estado_orden: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  id_cliente: { 
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  id_carrito: { 
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  id_direccion_envio: { 
    type: DataTypes.INTEGER,
  },
  id_direccion_facturacion: { 
    type: DataTypes.INTEGER,
  },
  id_metodo_pago: { 
    type: DataTypes.INTEGER,
  },
});

OrdenCompra.belongsTo(Cliente, { foreignKey: 'id_cliente', onDelete: 'CASCADE' });
OrdenCompra.belongsTo(Carrito, { foreignKey: 'id_carrito', onDelete: 'CASCADE' });
OrdenCompra.belongsTo(MetodoPago, { foreignKey: 'id_metodo_pago', onDelete: 'CASCADE' });
OrdenCompra.belongsTo(Direccion, { foreignKey: 'id_direccion_envio', onDelete: 'CASCADE' });
OrdenCompra.belongsTo(Direccion, { foreignKey: 'id_direccion_facturacion', onDelete: 'CASCADE' });//no se si jale asi pero a ver que pasa

module.exports = OrdenCompra;
