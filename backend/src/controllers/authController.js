const bcrypt = require('bcrypt');
const { User } = require('../models/Usuario');

exports.registerUser = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = await User.create({
      usuario: req.body.usuario,
      correo: req.body.correo,
      contrasena: hashedPassword,
    });
    res.json({ user });
  } catch (error) {
    res.status(500).json({ error: 'Error en el registro de usuario' });
  }
};

exports.loginUser = (req, res) => {
  res.json({ user: req.user });
};

exports.logoutUser = (req, res) => {
  if (req.isAuthenticated()) {
      req.logout();
      res.json({ message: 'Sesión cerrada exitosamente' });
  } else {
      res.status(401).json({ error: 'No hay una sesión activa para cerrar' });
  }
};