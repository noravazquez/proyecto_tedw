const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('direccions', {
    id_direccion: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    calle: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    ciudad: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    estado: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    codigo_postal: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    pais: {
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
    }
  }, {
    sequelize,
    tableName: 'direccions',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "direccions_pkey",
        unique: true,
        fields: [
          { name: "id_direccion" },
        ]
      },
    ]
  });
};
