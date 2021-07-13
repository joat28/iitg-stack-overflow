const User = require("../models/Users");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports.signup = async (req, res) => {
  const { name, email, password } = req.body;
  try {
   
    user = await User.create({ name, email, password });
    const payload = { email };
    const token = jwt.sign(payload, process.env.JWT_SECRET_TOKEN);

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
          const token = jwt.sign(payload, process.env.JWT_SECRET_TOKEN);
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

module.exports.loadUser = async (req, res) => {
  
  if (!req.user.email) {
    
    return res.status(401).json({
      message: "Unauthorized",
    });
  }
  try {
    const loadedUser = await User.findOne({ email: req.user.email });
    if (!loadedUser) {
      return res.status(401).json({
        message: "Unauthorized",
      });
    }
    
    token = req.headers["authorization"].split(" ")[1];
    return res.status(200).json({
      message: "user found",
      data: { isAuthenticated: true, user: loadedUser, token },
    });
  } catch (error) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }
};

module.exports.logout = (req, res) => {
  return res.json({
    message: "Logged Out!",
    isAuthenticated: false,
  });
};
