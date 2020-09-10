const express = require('express');
require('dotenv/config');
const { db_connection } = require("./Database/index.js")
const app = express();
const port = process.env.PORT;


app.get("/", (request, response) => {
	const jane =
	response.send("Hello, world");
})

app.listen(port, () => {
	console.log(`Connected to port ${port}`);
})
