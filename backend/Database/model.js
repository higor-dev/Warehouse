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
  type: DataTypes.TEXT,
  image: DataTypes.BLOB
})

const Transaction = sequelize.define("transaction", {
  author: DataTypes.TEXT,
  quantity: DataTypes.TEXT,
  price: DataTypes.INTEGER,
  isApportioned: DataTypes.BOOLEAN
})


const Company = sequelize.define("company", {
  balance: DataTypes.INTEGER,  
})

const Installment = sequelize.define("installment", {
  price: DataTypes.INTEGER,
  paymentDay: DataTypes.DATE,
  paid: DataTypes.BOOLEAN
})

//A company has many transactions and many products
Company.hasMany(Transaction);
Company.hasMany(Product);
Product.hasOne(Transaction);
Transaction.hasMany(Installment);




module.exports = {
    User,
    Product,
    Company,
    Transaction
}