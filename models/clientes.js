const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('clientes', {
    id_cliente: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    apellido_paterno: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    apellido_materno: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    telefono: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'usuarios',
        key: 'id_usuario'
      }
    }
  }, {
    sequelize,
    tableName: 'clientes',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "clientes_pkey",
        unique: true,
        fields: [
          { name: "id_cliente" },
        ]
      },
    ]
  });
};
