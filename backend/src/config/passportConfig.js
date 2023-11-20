const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const  Usuario = require('../models/Usuario');

passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      const user = await Usuario.findOne({ where: { username } });
      if (!user) return done(null, false, { message: 'Usuario no encontrado' });

      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) return done(null, false, { message: 'Contraseña incorrecta' });

      return done(null, user);
    } catch (error) {
      return done(error);
    }
  })
);

passport.serializeUser((user, done) => {
  done(null, user.id_usuario);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await Usuario.findByPk(id);
    done(null, user);
  } catch (error) {
    done(error);
  }
});

module.exports = passport;
