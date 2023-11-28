const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const Usuario = sequelize.define('Usuarios', {
    id_usuario: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    usuario: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    correo: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    contrasena: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'usuarios',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "usuarios_pkey",
        unique: true,
        fields: [
          { name: "id_usuario" },
        ]
      },
    ]
  });

  return Usuarios;
};