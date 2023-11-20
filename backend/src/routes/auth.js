const express = require('express');
const passport = require('passport');
const { registerUser, loginUser, logoutUser } = require('../controllers/authController');

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', passport.authenticate('local'), loginUser);
router.get('/logout', ensureAuthenticated, logoutUser);


module.exports = router;