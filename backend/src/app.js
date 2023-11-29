const express = require('express');
const bodyParser = require('body-parser');

const passport = require('passport');
const passportC = require('./config/passportConfig');
const session = require('express-session');

const Sequelize  = require('sequelize');
const sequelize = require('./config/database');

const Carritos = require("./models/carritos");
const Categorias = require("./models/categorias");
const Clientes = require("./models/clientes");
const Cupondescuentos = require("./models/cupondescuentos");
const Detallecarritos = require("./models/detallecarritos");
const Direccions = require("./models/direccions");
const Metodopagos = require("./models/metodopagos");
const Ordencompras = require("./models/ordencompras");
const Productos = require("./models/productos");
const Proveedors = require("./models/proveedors");
const Rols = require("./models/rols");
const Usuariorols = require("./models/usuariorols");
const Usuarios = require("./models/usuarios");

const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const productRoutes = require('./routes/product');
const addressRoutes = require('./routes/address');
const cartRoutes = require('./routes/cart');
const checkoutRoutes = require('./routes/checkout');
const reportsRoutes = require('./routes/reports');

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
    console.log('Modelos sincronizados con la base de datos.');

    console.log(Carritos);
    console.log(Categorias);
    console.log(Clientes);
    console.log(Cupondescuentos);
    console.log(Detallecarritos);
    console.log(Direccions);
    console.log(Metodopagos);
    console.log(Ordencompras);
    console.log(Productos);
    console.log(Proveedors);
    console.log(Rols);
    console.log(Usuariorols);
    console.log(Usuarios);

    //console.log(models);
  })
  .catch((error) => {
    console.error('Error al conectar con la base de datos:', error);
  });

// Configuración de Passport y sesiones
app.use(session({ secret: 'aiura', resave: false, saveUninitialized: false }));
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

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});