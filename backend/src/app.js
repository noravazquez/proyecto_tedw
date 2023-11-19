require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const session = require('express-session');
const { Sequelize } = require('sequelize');
const passportConfig = require('./config/passportConfig');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());


// Configuración de Sequelize
const sequelize = new Sequelize({
  database: '',
  username: '',
  password: '',
  host: '', // El endpoint de tu instancia RDS en AWS
  port: '5432', 
  dialect: 'postgres',
  logging: false,
});

// Configuración de Passport
app.use(session({ secret: 'your-secret-key', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());
passportConfig();

// Rutas
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});