//Use .env props here
require('dotenv/config');
const { Sequelize } = require('sequelize');

const user = process.env.USER
const sequelize = new Sequelize(process.env.DATABASE, "root", process.env.PASSWORD, {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = {
  sequelize,
};
