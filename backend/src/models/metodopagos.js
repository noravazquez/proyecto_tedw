const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('metodopagos', {
    id_metodo_pago: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    metodo_pago: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'metodopagos',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "metodopagos_pkey",
        unique: true,
        fields: [
          { name: "id_metodo_pago" },
        ]
      },
    ]
  });
};
