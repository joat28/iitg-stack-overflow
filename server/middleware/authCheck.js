require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports = checkAuth = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  if (!authHeader) {
    // console.log('No header found');
    return res.status(401).json({
      isAuthenticated: false,
      message: "Header not present",
    });
  } 
  else {
    const token = authHeader.split(" ")[1];
    // console.log("Token logged in authCheck.js ", token)
    if (!token) {
      // console.log("No token present");
      return res.status(401).json({
        isAuthenticated: false,
        message: "Token not given",
      });
    }
    else {
      jwt.verify(token, process.env.JWT_SECRET_TOKEN , (error, user) => {
        if (error) {
          console.log('Error in token, not valid!');
          return res.status(401).json({
            isAuthenticated: false,
            message: "Invalid token",
            error: error.message,
          });
        }
        // console.log("valid token in authheck");
        req.user = user;
        next();
      });
    }
  }
};
