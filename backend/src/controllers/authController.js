// const bcrypt = require('bcrypt');
// const LocalStrategy = require('passport-local').Strategy;
// const passport = require('passport');
// //const Usuario = require('../models/Usuario');

// exports.registerUser = async (req, res) => {
//   try {
//     // Validar el formato del correo electrónico
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(req.body.correo)) {
//       return res.status(400).json({ error: 'Formato de correo electrónico inválido' });
//     }

//     const [existingUser, existingEmail] = await Promise.all([
//       Usuario.findOne({ where: { usuario: req.body.usuario } }),
//       Usuario.findOne({ where: { correo: req.body.correo } }),
//     ]);

//     if (existingUser) {
//       return res.status(400).json({ error: 'Este nombre de usuario ya existe registrado' });
//     }

//     if (existingEmail) {
//       return res.status(400).json({ error: 'El correo ya está registrado' });
//     }

//     const hashedPassword = await bcrypt.hash(req.body.contrasena, 10);
//     const user = await Usuario.create({
//       usuario: req.body.usuario,
//       correo: req.body.correo,
//       contrasena: hashedPassword,
//     });

//     res.json({ user });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Error en el registro de usuario' });
//   }
// };


// exports.loginUser = (req, res, next) => {
//   passport.authenticate('local', (err, user, info) => {
//     if (err) {
//       return next(err);
//     }
//     if (!user) {
//       return res.status(401).json({ message: info.message });
//     }
//     req.logIn(user, (err) => {
//       if (err) {
//         return next(err);
//       }
//       return res.json({ user });
//     });
//   })(req, res, next);
// };

// exports.logoutUser = (req, res) => {
//   if (req.isAuthenticated()) {
//       req.logout();
//       res.json({ message: 'Sesión cerrada exitosamente' });
//   } else {
//       res.status(401).json({ error: 'No hay una sesión activa para cerrar' });
//   }
// };