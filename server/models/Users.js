const mongoose = require("mongoose");
// const { isEmail } = require("validator");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
      required: [true, "Please enter a display name"],
    },
    email: {
      type: String,
      required: [true, "incorrect email"],
      unique: true,
      //   validate: [isEmail, "incorrect email"],
    },
    password: {
      type: String,
      required: [true, "incorrect password"],
      minlength: [6, "incorrect password"],
    },
  },
  {
    timestamps: true,
  }
);
// userSchema.createIndexes();

userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

userSchema.methods.comparePasswords = function (userPassword, callback) {
	bcrypt.compare(userPassword, this.password, function (error, isMatch) {
		if (error) return callback(error);
		return callback(null, isMatch);
	});
}

const User = mongoose.model("User", userSchema);

module.exports = User;
