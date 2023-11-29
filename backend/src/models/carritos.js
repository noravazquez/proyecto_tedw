const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');
const Cliente = require('./clientes');
const CuponDescuento = require('./cupondescuentos');
const DetalleCarrito = require('./detallecarritos');

class Carrito extends Model {}

Carrito.init({
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
  sequelize,
  tableName: 'carritos', 
});

Carrito.hasMany(DetalleCarrito, { foreignKey: 'id_carrito' });
Carrito.belongsTo(Cliente, { foreignKey: 'id_cliente', onDelete: 'CASCADE' });
Carrito.belongsTo(CuponDescuento, { foreignKey: 'id_cupon_descuento', onDelete: 'CASCADE' });

module.exports = Carrito;
