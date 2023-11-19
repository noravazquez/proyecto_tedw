const ensureAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.status(401).json({ message: 'No autenticado' });
};

module.exports = { ensureAuthenticated };
