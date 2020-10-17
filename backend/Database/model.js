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
  quantity: DataTypes.INTEGER,
  price: DataTypes.DOUBLE,
  type: DataTypes.TEXT,
  sellPrice: DataTypes.DOUBLE,
  isValid: DataTypes.BOOLEAN,
  image: DataTypes.TEXT('long')
})

const Transaction = sequelize.define("transaction", {
  author: DataTypes.TEXT,
  quantity: DataTypes.INTEGER,
  price: DataTypes.DOUBLE,
  received: DataTypes.DOUBLE,
  isApportioned: DataTypes.BOOLEAN,
  isValid: DataTypes.BOOLEAN,
  portion: DataTypes.INTEGER
})


const Company = sequelize.define("company", {
  balance: DataTypes.DOUBLE,  
})

const Installment = sequelize.define("installment", {
  price: DataTypes.DOUBLE,
  paymentDay: DataTypes.DATE,
  paid: DataTypes.BOOLEAN,
  isValid: DataTypes.BOOLEAN
})

// paidAlready = Campo em transaction do quanto foi pago até agora
// quando passar o cron e trocar pra paid -> 

// transaction -> price / inteiro -> Persistir de cara pra transaction (HEAD) 

//A company has many transactions and many products
Company.hasMany(Transaction);
Company.hasMany(Product);
Transaction.hasMany(Installment);
Transaction.belongsTo(Product);




module.exports = {
    User,
    Product,
    Company,
    Transaction,
    Installment
}