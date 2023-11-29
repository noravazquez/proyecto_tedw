const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');
const Producto = require('./productos');

class Categoria extends Model {}

Categoria.init({
  id_categoria: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  categoria: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize,
  tableName: 'categorias', 
});

Categoria.hasMany(Producto, { foreignKey: 'id_categoria' });

module.exports = Categoria;
