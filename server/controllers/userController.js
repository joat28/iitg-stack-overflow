const User = require("../models/Users");

module.exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json({
      message: "Successfully fetched all users",
      data: users,
    });
  } catch (error) {
    return res.status(400).json({
      message: "Error in fetching users",
    });
  }
};

module.exports.getUser = async (req, res) => {
  try {
    const user_id = req.params.user_id;
    const user = await User.findById(user_id).populate([
      { path: "answers" },
      { path: "questions" },
    ]);
    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    return res.status(200).json({
      message: "User Found",
      data: user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};
