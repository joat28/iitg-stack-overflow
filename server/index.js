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

app.get('/', (req, res) => {
	res.send('Welcome to IITG Stakoverflow API');
})
app.listen(process.env.PORT, () => {
	console.log("Server running ... ");
});
