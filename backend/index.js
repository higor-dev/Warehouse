require('dotenv/config');
const express = require('express');
const app = express();
const port = process.env.PORT;
const router = require("./Controller/userController");
const product = require("./Controller/productController");
const { General }  = require("./Controller/GeneralTransactionController");

app.use(express.urlencoded({extended: true})) 
app.use(express.json())
app.use(router);
app.use(product);
app.use(General);

app.listen(port, () => {
	console.log(`Connected to port ${port}`);
})
