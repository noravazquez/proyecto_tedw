const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');

class OrdenCompra extends Model {}

OrdenCompra.init({
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
}, {
  sequelize,
  modelName: 'OrdenCompra',
  tableName: 'ordencompras', 
});


module.exports = OrdenCompra;
