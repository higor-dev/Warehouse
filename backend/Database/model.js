const { Sequelize, Model, DataTypes } = require('sequelize');
const { sequelize } = require("./dbConnection");

const User = sequelize.define("user", {
  name: DataTypes.TEXT,
  lastName: DataTypes.TEXT,
  password: DataTypes.TEXT,
  email: DataTypes.TEXT
});

const Product = sequelize.define("product", {
  productName: DataTypes.TEXT,
  quantity: DataTypes.TEXT,
  price: DataTypes.INTEGER,
  type: DataTypes.TEXT
})

const Transaction = sequelize.define("transaction", {
  author: DataTypes.TEXT,


})


const Company = sequelize.define("company", {
  balance: DataTypes.INTEGER,  
})

//A company has many transactions and many products
Company.hasMany(Transaction);
Company.hasMany(Product);
Product.hasOne(Transaction);




module.exports = {
    User,
    Product,
    Company,
    Transaction
}