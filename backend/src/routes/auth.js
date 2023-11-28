const express = require('express');
const passport = require('passport');
const { ensureAuthenticated } = require('../config/authMiddleware');
const { registerUser, loginUser, logoutUser } = require('../controllers/authController');

const router = express.Router();

router.post('/register', async (req, res) => {
    try {
      await registerUser(req, res);
    } catch (error) {
      console.error('Error en la ruta de registro:', error);
      res.status(500).json({ error: 'Error en el registro de usuario' });
    }
  });
  
  router.post('/login', passport.authenticate('local'), async (req, res) => {
    try {
      await loginUser(req, res);
    } catch (error) {
      console.error('Error en la ruta de inicio de sesión:', error);
      res.status(500).json({ error: 'Error en el inicio de sesión' });
    }
  });
  
router.get('/logout', ensureAuthenticated,  logoutUser);


module.exports = router;