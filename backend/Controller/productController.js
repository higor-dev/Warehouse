const express = require('express');
require('dotenv/config');
const product = express.Router();
const { Product } = require("../Database/model");

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

product.post("/createProduct", (req,res) => {
    const product = Product.create(req.body);;
    product
        .then(data => res.json(data))
        .catch(err => res.json(err));

})

product.put("/updateProduct", (req,res) => {
    const product = Product.update(req.body, {where: {id: req.body.id}});
    if(product)
    res.json({
        code: "200"
    })
    else{
        res.json(product.catch(err => err));
    }
})

product.delete("/deleteProduct", (req,res)=>{
    const product = Product.destroy({where: {id: req.body.id}});
    product
        .then(data => res.json(data))
        .catch(err => res.json(err));
    
})

module.exports = product;