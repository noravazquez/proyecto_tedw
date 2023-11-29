const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Cliente = require('./clientes');
const CuponDescuento = require('./cupondescuentos');
const DetalleCarrito = require('./detallecarritos');

const Carrito = sequelize.define('Carrito', {
  id_carrito: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  total: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
  id_cliente: { 
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  id_cupon_descuento: { 
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  tableName: 'carritos', 
});

Carrito.hasMany(DetalleCarrito, { foreignKey: 'id_carrito' });
Carrito.belongsTo(Cliente, { foreignKey: 'id_cliente', onDelete: 'CASCADE' });
Carrito.belongsTo(CuponDescuento, { foreignKey: 'id_cupon_descuento', onDelete: 'CASCADE' });

module.exports = Carrito;
