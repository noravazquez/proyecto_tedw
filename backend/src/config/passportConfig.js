const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const Usuario = require('../models/Usuario');

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
  done(null, user.id);
});

// Deserialización del usuario al recuperarlo de la sesión
passport.deserializeUser(async (id, done) => {
  try {
    const user = await Usuario.findByPk(id);
    done(null, user);
  } catch (error) {
    done(error);
  }
});