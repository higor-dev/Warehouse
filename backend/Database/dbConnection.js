//Use .env props here

const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('storage', 'root', 'tiger', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = {
  sequelize,
};
