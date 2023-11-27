const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('carritos', {
    id_carrito: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    total: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    id_cliente: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'clientes',
        key: 'id_cliente'
      }
    },
    id_cupon_descuento: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'cupondescuentos',
        key: 'id_cupon_descuento'
      }
    }
  }, {
    sequelize,
    tableName: 'carritos',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "carritos_pkey",
        unique: true,
        fields: [
          { name: "id_carrito" },
        ]
      },
    ]
  });
};
