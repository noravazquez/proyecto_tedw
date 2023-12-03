const passport = require('passport');

const ensureAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.status(401).json({ message: 'No autenticado' });
};

const  Roles  = require('../models/usuariorols');

async function authorize(role) {
  return async (req, res, next) => {
    try {
      if (req.user) {
        const userRoles = await Roles.findAll({
          where: { id_usuario: req.user.id_usuario, id_rol: role },
        });

        if (userRoles.length > 0) {
          return next();
        }
      }
      res.status(403).json({ error: 'Acceso no autorizado' });
    } catch (error) {
      console.error('Error en la autorización:', error);
      res.status(500).json({ error: 'Error en la autorización' });
    }
  };
}

module.exports = { ensureAuthenticated, authorize };
