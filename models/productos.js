const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('productos', {
    id_producto: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    producto: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    precio: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    imagenes: {
      type: DataTypes.JSON,
      allowNull: true
    },
    id_categoria: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'categorias',
        key: 'id_categoria'
      }
    },
    id_proveedor: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'proveedors',
        key: 'id_proveedor'
      }
    }
  }, {
    sequelize,
    tableName: 'productos',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "productos_pkey",
        unique: true,
        fields: [
          { name: "id_producto" },
        ]
      },
    ]
  });
};
