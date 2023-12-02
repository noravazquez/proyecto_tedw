const { Sequelize } = require('sequelize');
//const SequelizeAuto = require('sequelize-auto');

const sequelize = new Sequelize({
  /*database: 'BDTEDW',
  username: 'postgres',
  password: 'PfGHuuGJZw0A1CSt7tHt',
  host: 'db1.cfyu3whtuwpf.us-east-1.rds.amazonaws.com',*/
  database: 'innovatech',
  username: 'admin_innovatech',
  password: '1234',
  host: 'localhost',
  port: '5432',
  dialect: 'postgres',
  define: {
    timestamps: false, 
  },
dialectOptions: {
  ssl: {
    require: false,
    rejectUnauthorized: false,
  },
},
logging: console.log,
});

module.exports = sequelize;
