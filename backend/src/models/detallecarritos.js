const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('detallecarritos', {
    id_detalle_carrito: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cantidad: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_carrito: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'carritos',
        key: 'id_carrito'
      }
    },
    id_producto: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'productos',
        key: 'id_producto'
      }
    }
  }, {
    sequelize,
    tableName: 'detallecarritos',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "detallecarritos_pkey",
        unique: true,
        fields: [
          { name: "id_detalle_carrito" },
        ]
      },
    ]
  });
};
