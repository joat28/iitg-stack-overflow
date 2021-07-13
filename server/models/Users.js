const mongoose = require("mongoose");
const { isEmail } = require("validator");
const bcrypt = require("bcryptjs");
const uniqueValidator = require("mongoose-unique-validator");
const userSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			unique: true,
			required: [true, "Please enter a username"],
		},
		email: {
			type: String,
			required: [true, "Please enter an email id"],
			unique: true,
			validate: [isEmail, "Please enter a valid email"],
		},
		password: {
			type: String,
			required: [true, "Password length must be atleast 6 characters"],
			minlength: [6, "Password length must be atleast 6 characters"],
		},
		answers: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "Answer",
			},
		],
		questions: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "Question",
			},
		],
	},
	{
		timestamps: true,
	}
);

userSchema.plugin(uniqueValidator);

userSchema.pre("save", async function (next) {
	// console.log("inside changing password");
	const salt = await bcrypt.genSalt();
	this.password = await bcrypt.hash(this.password, salt);
	next();
});
userSchema.methods.comparePasswords = function (userPassword, callback) {
	bcrypt.compare(userPassword, this.password, function (error, isMatch) {
		if (error) return callback(error);
		return callback(null, isMatch);
	});
};

const User = mongoose.model("User", userSchema);

module.exports = User;
