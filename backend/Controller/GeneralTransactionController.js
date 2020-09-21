const express = require('express');
require('dotenv/config');
const General = express.Router();
const { Company, Transaction, Product } = require("../Database/model");
const { sequelize } = require("../Database/dbConnection");
const jwt = require("jsonwebtoken");


function verifyJWT(req, res, next){
    var token = req.headers['x-access-token'];
    if (!token) return res.status(401).json({ auth: false, message: 'No token provided.' });
    
    jwt.verify(token, process.env.SECRET, function(err, decoded) {
      if (err) return res.status(500).json({ auth: false, message: 'Failed to authenticate token.' });
      
      // se tudo estiver ok, salva no request para uso posterior
      req.userId = decoded.id;
      next();
    });
}


General.get("/getAllTransactions", verifyJWT, (req,res)=>{
    const allTransactions = Transaction.findAll();
    allTransactions
        .then(data => res.json(data))
        .catch(err => res.json(err));
})

General.get("/getOneTransaction/:id", verifyJWT, (req,res)=>{
    const transaction = Transaction.findOne({ where: {id: req.params.id}});
    transaction
        .then(data => res.json(data))
        .catch(err => res.json(err));
})

// General.delete("/deleteTransaction", verifyJWT, (req,res)=> {
//     const transactionObject = Transaction.destroy({where: {id: req.body.id}});
//     transactionObject
//         .then(data => res.json(data))
//         .catch(err => res.json(err));
// })

General.get("/getBalance", verifyJWT, async (req,res)=>{
        const user = await getBalance(req.body.id);
        res.json(user[0][0]);
})

General.get("/getProductByType/:type", verifyJWT, async (req,res) => {
    const optional = await getProductByType(req.params.type);
    res.json(optional[0]);
})

async function getBalance(){
    const users = await sequelize.query(`SELECT balance from storage.companies where id= 1`);
    return users;
}

async function updateBalance(beforeProduct, postproduct){

    const balanceAfter = (postproduct.quantity * postproduct.price);
    const balanceBefore = (beforeProduct.quantity * beforeProduct.price);

    const difference = balanceAfter - balanceBefore;

    const value = await getBalance(1);
    const balance = value[0][0].balance - difference;
    const users = await sequelize.query(`UPDATE storage.companies SET balance = ${balance} WHERE id = 1`);
}

async function getProductByType(type){
    return await sequelize.query("SELECT * FROM storage.products p WHERE p.`type`" + ` LIKE '%${type}%'`); 
}

async function createTransaction(transaction){
    const transactionObject = Transaction.create(transaction);;
    transactionObject
        .then(data => {return data})
        .catch(err => {return err});
}

module.exports = {
    General: General,
    getBalance,
    updateBalance,
    createTransaction,
    getProductByType


}