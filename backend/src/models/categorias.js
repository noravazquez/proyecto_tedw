const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');

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


module.exports = Categoria;
