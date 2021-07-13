require("dotenv").config();
const express = require("express");
const db = require("./database.js");
const User = require("./models/Users.js");
const cors = require('cors')

const app = express();
const route = require("./routes/index");

app.use(cors({
	origin: "*"
}));
app.use(express.json());
app.use("/api", route);

app.listen(5000, () => {
	console.log("Server running ... ");
});
