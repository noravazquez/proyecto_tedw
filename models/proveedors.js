const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('proveedors', {
    id_proveedor: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    proveedor: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    telefono: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    correo_electronico: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'proveedors',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "proveedors_pkey",
        unique: true,
        fields: [
          { name: "id_proveedor" },
        ]
      },
    ]
  });
};
