require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports = checkAuth = (req, res, next) => {
	const authHeader = req.headers["authorization"];
	if (!authHeader) {
		return res.status(401).json({
			isAuthenticated: false,
			message: "Header not present",
		});
	} else {
		const token = authHeader.split(" ")[1];
		if (!token) {
			console.log("No token present");
			return res.status(401).json({
				isAuthenticated: false,
				message: "Token not given",
			});
		} else {
			jwt.verify(token, "secret", (error, user) => {
				if (error) {
					return res.status(401).json({
						isAuthenticated: false,
						message: "Invalid token",
						error: error.message,
					});
				}
				req.user = user;
				next();
			});
		}
	}
};
