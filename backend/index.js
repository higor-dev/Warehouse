require('dotenv/config');
const express = require('express');
const app = express();
const port = process.env.PORT;
const router = require("./Controller/userController");
const product = require("./Controller/productController");
const { General }  = require("./Controller/GeneralTransactionController");
const cookieParser = require('cookie-parser'); 
const bodyParser = require('body-parser');
const jwt = require("jsonwebtoken");
const { User } = require("./Database/model");
 
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json());
app.use(cookieParser()); 
app.use(express.json())
// app.use(router);
app.use(product);
app.use(General);

app.post("/login", async (req,res) => {
	const option = await User.findOne({ where: {email: req.body.email}});
	if(option.password === req.body.password){
		const id = option.id;
		const token = jwt.sign({id}, process.env.SECRET, {
			expiresIn: 30000
		});

		return res.json({ auth: true, token: token});
	}

	res.status(500).json({message: "Login inválido"});
})

app.listen(port, () => {
	console.log(`Connected to port ${port}`);
})
