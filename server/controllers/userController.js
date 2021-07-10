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
    user.questions.sort(function (q1, q2) {
      const votes1 = q1.upvotes.length - q1.downvotes.length;
      const votes2 = q2.upvotes.length - q2.downvotes.length;
      return votes2 - votes1;
    });
    user.answers.sort(function (q1, q2) {
      const votes1 = q1.upvotes.length - q1.downvotes.length;
      const votes2 = q2.upvotes.length - q2.downvotes.length;
      return votes2 - votes1;
    });

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

module.exports.updateUser = async (req, res) => {
  try {
    const id = req.params.user_id;
    const { name } = req.body;
    const oldUser = await User.findById(id);

    if (!oldUser) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    if (oldUser._id.toString() !== req.user._id.toString()) {
      return res.status(401).json({
        message: "Unauthorized",
      });
    }
    await User.findOneAndUpdate({ _id: id }, { name });
    
    return res.status(200).json({
      message: "User updated successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Unable to update User",
      
    });
  }
};
