const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cupondescuentos', {
    id_cupon_descuento: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    codigo_unico: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    descuento: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    fecha_vencimiento: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'cupondescuentos',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "cupondescuentos_pkey",
        unique: true,
        fields: [
          { name: "id_cupon_descuento" },
        ]
      },
    ]
  });
};
