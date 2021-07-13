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
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

module.exports.updateUser = async (req, res) => {
  try {
    const { name, password, newPassword, confirmPassword } = req.body;

    const user = req.user;
    const id = user._id;
    if (name === "") {
      return res.status(409).json({
        message: "Name cannot be empty!",
      });
    }

    user.comparePasswords(password, async function (error, isMatch) {
      //ERROR IN COMPARING
      if (error) {
        return res.status(400).json({
          message: "Invalid password!",
        });
      }
      // PASSWORD DID NOT MATCH
      else if (!isMatch) {
        return res.status(401).json({
          message: "Invalid password!",
        });
      } else {
        //PASSWORDS MATCHED
        if (name && name !== user.name) {
          const existingName = await User.findOne({ name });
          if (existingName) {
            return res.status(409).json({
              message: "User Name already exists.",
            });
          }
        }

        // USERNAME IS CORRECT
        const newUser = await User.findById(id);
        if (newPassword !== confirmPassword)
          return res.status(409).json({
            message: "confirm password doesn't match",
          });
        if (name) {
          newUser.name = name;
        }
        if (
          newPassword &&
          newPassword.length > 5 &&
          newPassword === confirmPassword
        ) {
          newUser.password = newPassword;
        }
        if (newPassword === "") await User.findByIdAndUpdate(id, { name });
        else await newUser.save();
        return res.status(200).json({
          message: "User updated successfully",
          data: newUser,
        });
      }
    });
  } catch (error) {
    return res.status(500).json({
      message: "Unable to update User",
    });
  }
};
