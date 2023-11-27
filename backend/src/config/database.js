const { Sequelize } = require('sequelize');
//const SequelizeAuto = require('sequelize-auto');

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

module.exports = sequelize;
