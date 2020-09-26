//Use .env props here

const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('storage', 'root', 'solaire', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = {
  sequelize,
};
