const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Cliente = require('./clientes');
const DetalleCarrito = require('./detallecarritos');
const Direccion = require('./direccions');
const MetodoPago = require('./metodopagos');

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
  id_detalle_carrito: { 
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
},{
  tableName: 'ordencompras', 
});

OrdenCompra.belongsTo(Cliente, { foreignKey: 'id_cliente', onDelete: 'CASCADE' });
OrdenCompra.belongsTo(DetalleCarrito, { foreignKey: 'id_detalle_carrito', onDelete: 'CASCADE' });
OrdenCompra.belongsTo(MetodoPago, { foreignKey: 'id_metodo_pago', onDelete: 'CASCADE' });
OrdenCompra.belongsTo(Direccion, { foreignKey: 'id_direccion_envio', onDelete: 'CASCADE' });

module.exports = OrdenCompra;