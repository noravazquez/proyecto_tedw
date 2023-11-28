// authController.js
const bcrypt = require('bcrypt');
const passport = require('passport');
const Usuarios = require('../models/usuarios');

exports.registerUser = async (req, res) => {
  try {
    // Validar el formato del correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(req.body.correo)) {
      return res.status(400).json({ error: 'Formato de correo electrónico inválido' });
    }

    const [existingUser, existingEmail] = await Promise.all([
      Usuarios.findOne({ where: { usuario: req.body.usuario } }),
      Usuarios.findOne({ where: { correo: req.body.correo } }),
    ]);

    if (existingUser) {
      return res.status(400).json({ error: 'Este nombre de usuario ya existe registrado' });
    }

    if (existingEmail) {
      return res.status(400).json({ error: 'El correo ya está registrado' });
    }

    const hashedPassword = await bcrypt.hash(req.body.contrasena, 10);
    const user = await Usuarios.create({
      usuario: req.body.usuario,
      correo: req.body.correo,
      contrasena: hashedPassword,
    });    

    res.json({ user });
  } catch (error) {
    console.error('Error en el registro de usuario:', error);
    res.status(500).json({ error: 'Error en el registro de usuario' });
  }
};
