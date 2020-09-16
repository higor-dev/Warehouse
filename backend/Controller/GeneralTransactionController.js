const express = require('express');
require('dotenv/config');
const General = express.Router();
const { Company, Transaction } = require("../Database/model");
const { sequelize } = require("../Database/dbConnection");



General.get("/getAllTransactions", (req,res)=>{
    const allTransactions = Transaction.findAll();
    allTransactions
        .then(data => res.json(data))
        .catch(err => res.json(err));
})

General.get("/getOneTransaction", (req,res)=>{
    const transaction = Transaction.findOne({ where: {id: req.body.id}});
    transaction
        .then(data => res.json(data))
        .catch(err => res.json(err));
})

General.delete("/deleteTransaction", (req,res)=> {
    const transactionObject = Transaction.destroy({where: {id: req.body.id}});
    transactionObject
        .then(data => res.json(data))
        .catch(err => res.json(err));
})

General.get("/getBalance", async (req,res)=>{
        const user = await getBalance(req.body.id);
        res.json(user[0][0]);
})

async function getBalance(id){
    const users = await sequelize.query(`SELECT balance from storage.companies where id=${id}`);
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
    createTransaction


}