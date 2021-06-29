const User = require("../models/Users");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports.signup = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    // const user = await User.findOne({ email });
    // if (user) throw "Email already exists";
    // user = await User.findOne({ name });
    // if (user) throw "Name already exists";

    // user = new User({ name, email, password });
    // user.save((error) => {throw error});
    user = await User.create({ name, email, password });
    const payload = { email };
    const token = jwt.sign(payload, "secret");

    //RETURN TOKEN
    return res.status(200).json({
      message: "Successfully Signed Up and Logged in",
      data: {
        user,
        token,
        isAuthenticated: true,
      },
    });
  } catch (error) {
    return res.status(400).json({
      message: "User already registered",
      error: error,
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
        if (error) {
          return res.status(401).json({
            message: "Invalid email or password!",
          });
        }
        // PASSWORD DID NOT MATCH
        else if (!isMatch) {
          return res.status(401).json({
            message: "Invalid email or password!",
          });
        } else {
          //CREATE TOKEN
          const payload = { email };
          const token = jwt.sign(payload, "secret");
          //RETURN TOKEN
          return res.status(200).json({
            message: "Successfully logged in",
            data: {
              isAuthenticated: true,
              token,
              user,
            },
          });
        }
      });
    }
    //USER NOT FOUND
    else {
      return res.status(401).json({
        message: "Invalid email or password!",
      });
    }
  } catch (error) {
    return res.status(400).json({
      message: "Please try again later",
    });
  }
};

module.exports.logout = async (req, res) => {
  return res.json({
    message: "Logged Out!",
    isAuthenticated: false,
  });
};