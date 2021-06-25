require("dotenv").config();
const express = require("express");
const db = require("./database.js");
const User = require("./models/Users.js");
const app = express();

const route = require("./routes/index");

app.use(express.json());
app.use("/", route);

app.listen(5000, () => {
	console.log("Server running ... ");
});
