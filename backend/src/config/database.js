const { Sequelize } = require('sequelize');
const SequelizeAuto = require('sequelize-auto');

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
    rejectUnauthorized: false,
  },
},
logging: console.log,
});

const auto = new SequelizeAuto('BDTEDW', 'postgres', 'PfGHuuGJZw0A1CSt7tHt', {
  host: 'db1.cfyu3whtuwpf.us-east-1.rds.amazonaws.com',
  dialect: 'postgres',
  directory: '../models',
  port: 5432,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  },
});

auto.run(function (err) {
  if (err) throw err;
  console.log(auto.tables); // Las tablas estarán disponibles en este objeto
});


module.exports = {sequelize, auto};
