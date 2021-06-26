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
    return res.status(200).json({ message: "user saved", user: user._id });
  } catch (error) {
    const errors = handleErrors(error);
    return res.status(200).json({
      message: "Unable to create User",
      error: errors,
    });
  }
};

module.exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    //FIND USER
    const user = await User.findOne({ email: email });
    //USER FOUND
    if (user) {

      user.comparePasswords(password, function (error, isMatch) {
        //ERROR IN COMPARING
        if (error){
          console.log("Error in comparing passwords")
          return res.status(401).json({
            error: "Error in comparing passwords",
          });
        }
        
        // PASSWORD DID NOT MATCH
        else if (!isMatch) {
          console.log("passwords do not match")
          return res.status(401).json({
            error: "Invalid password",
          });
        }
        else {
          // PASSWORD MATCHED
          console.log("passwords matched!!");
          //CREATE TOKEN
          const payload = { email };
          const token = jwt.sign(payload, "secret");
          req.headers["authorization"] = `Bearer ${token}`;
          console.log("token", token);
          //RETURN TOKEN
          return res.status(200).json({
            message: "Successfully logged in",
            isAuthenticated: true,
            token,
          });
        }
      });
    }
    //USER NOT FOUND
    else {
      return res.status(401).json({
      error: "Invalid email",
    });
      
    }
    
  } catch (error) {
    return res.status(400).json({
      error: "Unable to connect to DB",
    });
  }
};

module.exports.logout = async (req, res) => {
  req.headers["authorization"] = '';
  return res.json({
    message : "Logged Out!",
    isAuthenticated: false
  })
}