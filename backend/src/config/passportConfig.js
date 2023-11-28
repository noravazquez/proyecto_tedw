const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const Usuario = require('../models/usuarios');

//const Usuario = require('../models/Usuario');

passport.use(
  new LocalStrategy(
    {
      usernameField: 'usuario',
      passwordField: 'contrasena',
    },
    async (usuario, contrasena, done) => {
      try {
        const user = await Usuario.findOne({ where: { usuario } });
        if (!user) {
          return done(null, false, { message: 'Usuario no encontrado' });
        }

        const isPasswordValid = await bcrypt.compare(contrasena, user.contrasena);
        if (!isPasswordValid) {
          return done(null, false, { message: 'Contraseña incorrecta' });
        }

        return done(null, user);
      } catch (error) {
        return done(error);
      }
    }
  )
);

// Serialización del usuario para almacenar en la sesión
passport.serializeUser((user, done) => {
  console.log('Serialize User:', user);
  done(null, user.id_usuario);
});

passport.deserializeUser(async (id, done) => {
  console.log('Deserialize User ID:', id);
  try {
    const user = await Usuario.findByPk(id);
    console.log('Deserialized User:', user);

    // Verifica si el objeto user tiene todos los campos necesarios
    if (user) {
      console.log('User ID:', user.id_usuario);
      console.log('Username:', user.usuario);
      console.log('Email:', user.correo);
      // Puedes imprimir más propiedades según sea necesario

      done(null, user);
    } else {
      console.log('Usuario no encontrado');
      done(null, false, { message: 'Usuario no encontrado' });
    }
  } catch (error) {
    console.error('Error al deserializar el usuario:', error);
    done(error);
  }
});
