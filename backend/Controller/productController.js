const express = require('express');
require('dotenv/config');
const product = express.Router();
const { Product, User } = require("../Database/model");
const { getBalance, updateBalance, createTransaction } = require("../Controller/GeneralTransactionController");
const jwt = require("jsonwebtoken");

function verifyJWT(req, res, next){
    var token = req.headers['x-access-token'];
    if (!token) return res.status(401).json({ auth: false, message: 'No token provided.' });
    
    jwt.verify(token, process.env.SECRET, function(err, decoded) {
      if (err) return res.status(500).json({ auth: false, message: 'Failed to authenticate token.' });
      
      // se tudo estiver ok, salva no request para uso posterior
      req.userId = decoded.id;
      console.log(req.userId);
      next();
    });
}

product.get("/getAllProducts", verifyJWT,(req,res)=>{
    const allproducts = Product.findAll();
    allproducts
        .then(data => res.json(data))
        .catch(err => res.json(err));
})

product.get("/getProduct/:id", verifyJWT,(req,res)=>{
    const product = Product.findOne({ where: {id: req.params.id}});
    product
        .then(data => res.json(data))
        .catch(err => res.json(err));
})

product.post("/createProduct", verifyJWT, async (req,res) => {
    const user = await User.findOne({where: {id:req.userId}});
    const product = await Product.create(req.body);
    createTransaction(
        {
            author: user.name, 
            productId: product.id,
            companyId: 1, //There is only one company
            price:  (product.price * product.quantity *(-1)), //Transaction price, not product price
            quantity: product.quantity
        }
    );    
    updateBalance( { quantity: 0, price: 0}, product.dataValues);
    res.json(product);

})

product.put("/updateProduct", verifyJWT, async (req,res) => {
    const user = await User.findOne({where: {id: req.userId}}); //Find author
    const fetchedProduct = await Product.findOne({where: {id: req.body.id}}); //Find product before update
    const product = await Product.update(req.body,{where: {id: req.body.id}}); //update
    
    //IF instalment > 0 then make a whole new business logic here and return res.json(something)

    //Balance calculation
    const balanceAfter = (req.body.quantity * req.body.price); 
    const balanceBefore = (fetchedProduct.quantity * fetchedProduct.price);
    const transactionPrice = (balanceAfter - balanceBefore) * (-1);
    
    //Quantity calculation
    const transactionQuantity = req.body.quantity - fetchedProduct.quantity;

    createTransaction(
        {
            author: `${user.name} ${user.lastName}`,  
            productId: fetchedProduct.id,
            companyId: 1, //There is only one conpany
            price: transactionPrice,
            quantity: transactionQuantity
        }
    );    
    updateBalance(fetchedProduct, req.body);
    
    res.json(await Product.findOne({where: {id: req.body.id}}));
    
})

// product.delete("/deleteProduct/:id", verifyJWT, async (req,res)=> {
//     const fetchedProduct = await Product.findOne({where: {id: req.params.id}})
//     await createTransaction(
//         {
//             author: fetchedProduct.productName, //Change to user name of a session 
//             productId: fetchedProduct.id,
//             companyId: 1, //There is only one conpany
//             price:  (fetchedProduct.price * fetchedProduct.quantity), //Transaction price, not product price
//             quantity: (-1)*fetchedProduct.quantity
//         }
//     );    
//     await updateBalance(fetchedProduct, { quantity: 0, price: 0});

//     const product = await Product.destroy({where: {id: req.params.id}});
//     res.json(product);
    
// })

module.exports = product;