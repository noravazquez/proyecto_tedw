const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Producto = require('./productos');

const Categoria = sequelize.define('Categoria', {
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
  tableName: 'categorias', 
});

Categoria.hasMany(Producto, { foreignKey: "id_categoria"});

module.exports = Categoria;