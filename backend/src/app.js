require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const session = require('express-session');
const { Sequelize } = require('sequelize');
const passportConfig = require('./config/passportConfig'); 
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');


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

sequelize
  .authenticate()
  .then(() => {
    console.log('Conexión a la base de datos establecida correctamente.');
  })
  .catch((error) => {
    console.error('Error al conectar con la base de datos:', error);
  });


// Configuración de Passport
app.use(session({ secret: 'process.env.PASSPORT_SECRET', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());


// Rutas
app.get('/', (req, res) => {
  res.send('¡Bienvenido a mi aplicación!');
});
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});