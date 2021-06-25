const User = require("../models/Users");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const handleErrors = (error) => {
	let errors = { name: "", email: "", password: "" };
	if (error.message === "incorrect email") {
		errors.email = "Email is not registered";
	}
	if (error.message === "incorrect password") {
		errors.password = "Incorrect Password";
	}
	if (error.code === 11000) {
		errors.email = "Email already registered";
	}
	return errors;
};

module.exports.signup = async (req, res) => {
	const { name, email, password } = req.body;
	try {
		const user = await User.create({ name, email, password });
		res.status(201).json({ message: "user saved", user: user._id });
		console.log("user saved");
	} catch (error) {
		const errors = handleErrors(error);
		res.status(400).json({ errors });
	}
};

module.exports.login = async (req, res) => {
	const { email, password } = req.body;
	try {
		const user = await User.findOne({ email: email });
		if (user) {
			const isMatch = bcrypt.compare(password, user.password);
			if (!isMatch) {
				return res.status(401).json({
					message: "Incorrect Password",
				});
			}
			const payload = { email };
			const token = jwt.sign(payload, "secret");
			// req.header["Authorization"] = `Bearer ${token}`;
			console.log("token", token);
			return res.status(200).json({
				message: "Successfully logged in",
				isAuthenticated: true,
				token,
			});
		}
		return res.status(401).json({
			message: "Invalid Email",
		});
	} catch (error) {
		// const errors = handleErrors(error);
		res.status(400).json({
			message: "Unable to connect to DB",
			error: error.message,
		});
	}
};
