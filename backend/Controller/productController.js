const express = require('express');
require('dotenv/config');
const product = express.Router();
const { Product } = require("../Database/model");
const { getBalance, updateBalance, createTransaction } = require("../Controller/GeneralTransactionController");

product.get("/getAllProducts", (req,res)=>{
    const allproducts = Product.findAll();
    allproducts
        .then(data => res.json(data))
        .catch(err => res.json(err));
})

product.get("/getProduct", (req,res)=>{
    const product = Product.findOne({ where: {id: req.body.id}});
    product
        .then(data => res.json(data))
        .catch(err => res.json(err));
})

product.post("/createProduct", async (req,res) => {
    const product = await Product.create(req.body);
    createTransaction(
        {
            author: product.productName, //Change to user name of a session 
            productId: product.id,
            companyId: 1 //There is only one conpany
        }
    );    
    updateBalance( { quantity: 0, price: 0}, product.dataValues);
    res.json(product);

})

product.put("/updateProduct", async (req,res) => {
    const fetchedProduct = await Product.findOne({where: {id: req.body.id}});
    const product = await Product.update(req.body,{where: {id: req.body.id}})
    createTransaction(
        {
            author: fetchedProduct.productName, //Change to user name of a session 
            productId: fetchedProduct.id,
            companyId: 1 //There is only one conpany
        }
    );    
    updateBalance(fetchedProduct, req.body);
    
    res.json(await Product.findOne({where: {id: req.body.id}}));
    
})

product.delete("/deleteProduct", async (req,res)=> {
    const fetchedProduct = await Product.findOne({where: {id: req.body.id}})
    createTransaction(
        {
            author: fetchedProduct.productName, //Change to user name of a session 
            productId: fetchedProduct.id,
            companyId: 1 //There is only one conpany
        }
    );    
    updateBalance(fetchedProduct, { quantity: 0, price: 0});

    const product = Product.destroy({where: {id: req.body.id}});
    product
        .then(data => res.json(data))
        .catch(err => res.json(err));
    
})

module.exports = product;