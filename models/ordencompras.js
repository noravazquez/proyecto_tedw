const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ordencompras', {
    id_orden_compra: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: false
    },
    estado_orden: {
      type: DataTypes.STRING(255),
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
    id_detalle_carrito: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'detallecarritos',
        key: 'id_detalle_carrito'
      }
    },
    id_direccion: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'direccions',
        key: 'id_direccion'
      }
    },
    id_metodo_pago: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'metodopagos',
        key: 'id_metodo_pago'
      }
    }
  }, {
    sequelize,
    tableName: 'ordencompras',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "ordencompras_pkey",
        unique: true,
        fields: [
          { name: "id_orden_compra" },
        ]
      },
    ]
  });
};
