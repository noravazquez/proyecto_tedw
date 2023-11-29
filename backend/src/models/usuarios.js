const { DataTypes, Model } = require('sequelize');

module.exports = function(sequelize) {
  class Usuario extends Model {}
  Usuario.init({
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
    modelName: 'Usuario',  // Agregamos esta línea para especificar el nombre del modelo
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

  console.log('Métodos en Usuario:', Object.keys(Usuario.prototype));
  return Usuario;
};
