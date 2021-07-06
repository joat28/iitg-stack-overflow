const User = require("../models/Users");

module.exports = populateUser = (req, res, next) => {
  User.findOne({email: req.user.email}).then(user => {
    // console.log('inside populate user')
    req.user = user;
    // console.log(req.user)
    next();
  }).catch(error => {
      // console.log("Couldn't find user in populateUser ",error);
      next();
  })
};

