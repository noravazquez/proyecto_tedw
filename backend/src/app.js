const express = require('express');
const bodyParser = require('body-parser');

const passport = require('passport');
const passportC = require('./config/passportConfig');
const session = require('express-session');

const Sequelize  = require('sequelize');
const sequelize = require('./config/database');
const initModels = require('./config/syncModels');

const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const productRoutes = require('./routes/product');
const addressRoutes = require('./routes/address');
const cartRoutes = require('./routes/cart');
const checkoutRoutes = require('./routes/checkout');
const reportsRoutes = require('./routes/reports');
const adminRoutes = require('./routes/admin');

const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3003;

app.use(cors());
app.use(bodyParser.json());

// Inicialización de Sequelize y sincronización de modelos
sequelize
    .authenticate()
    .then(() => {
        console.log('Conexión a la base de datos establecida correctamente.');
        return sequelize.sync();
    })
    .then(() => {
        initModels(); // Llama a la función para inicializar modelos
        console.log('Modelos sincronizados con la base de datos.');
    })
    .catch((error) => {
        console.error('Error al conectar con la base de datos:', error);
    });

// Configuración de Passport y sesiones
app.use(session({
  secret: 'aiura',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 24 * 60 * 60 * 1000, 
    httpOnly: true,
    secure: false ,
    path: '/',
    sameSite: 'none'
  }
}));
app.use(passport.initialize());
app.use(passport.session());

// Rutas
app.get('/', (req, res) => {
  res.send('¡Bienvenido a mi aplicación!');
});

app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/product', productRoutes);
app.use('/api/stats', reportsRoutes);
app.use('/api/address', addressRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/checkout', checkoutRoutes);
app.use('/api/admin', adminRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
