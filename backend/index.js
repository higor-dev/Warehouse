require('dotenv/config');
const express = require('express');
const app = express();
const port = process.env.PORT;
const router = require("./Controller/userController");

app.use(express.urlencoded({extended: true})) 
app.use(express.json())
app.use(router);

app.listen(port, () => {
	console.log(`Connected to port ${port}`);
})
