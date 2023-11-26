const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  database: 'BDTEDW',
  username: 'postgres',
  password: 'PfGHuuGJZw0A1CSt7tHt',
  host: 'db1.cfyu3whtuwpf.us-east-1.rds.amazonaws.com',
  port: '5432',
  dialect: 'postgres',
  define: {
    timestamps: false, 
  },
dialectOptions: {
  ssl: {
    require: true,
    rejectUnauthorized: false, // Puede ser necesario configurar esto dependiendo de tu instancia
  },
},
logging: console.log,
});




const SequelizeAuto = require('sequelize-auto');


const auto = new SequelizeAuto('database', 'username', 'password', {
  host: 'db1.cfyu3whtuwpf.us-east-1.rds.amazonaws.com',
  dialect: 'postgres',
  directory: '../models',
  port: 5432,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false // Esto es necesario si tu certificado no está firmado por una entidad de certificación confiable
    }
  },
});

auto.run(function (err) {
  if (err) throw err;
  console.log(auto.tables); // Las tablas estarán disponibles en este objeto
});


module.exports = {sequelize, auto};
