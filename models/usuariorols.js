const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('usuariorols', {
    id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'usuarios',
        key: 'id_usuario'
      }
    },
    id_rol: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'rols',
        key: 'id_rol'
      }
    }
  }, {
    sequelize,
    tableName: 'usuariorols',
    schema: 'public',
    timestamps: false
  });
};
