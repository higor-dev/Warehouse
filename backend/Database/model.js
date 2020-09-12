const { Sequelize, Model, DataTypes } = require('sequelize');
const { sequelize } = require("./dbConnection");

const User = sequelize.define("user", {
  name: DataTypes.TEXT,
  lastName: DataTypes.TEXT,
  password: DataTypes.TEXT,
  email: DataTypes.TEXT
});

const Product = sequelize.define("product", {
  produtcName: DataTypes.TEXT,
  author: DataTypes.TEXT,
  date: DataTypes.DATE,
  quantity: DataTypes.TEXT,
  price: DataTypes.INTEGER
})

const Transaction = sequelize.define("transaction", {
  name: DataTypes.TEXT,
  lastName: DataTypes.TEXT,
  password: DataTypes.TEXT,
  email: DataTypes.TEXT
})


const Company = sequelize.define("product", {
  balance: DataTypes.INTEGER,
  product: Product,
  transaction: Transaciont

  
})


module.exports = {
    User
}