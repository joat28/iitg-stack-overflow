const mongoose = require('mongoose');
const { isEmail } = require('validator');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, 'Please enter a display name' ],
        unique: true,
    },
    email:{
        type: String,
        required: [true, 'incorrect email'],
        unique: true,
        validate: [isEmail, 'incorrect email']
    },
    password: {
        type: String,
        required: [true, 'incorrect password'],
        minlength: [6, 'incorrect password']
    }
}, {
    timestamps: true
})

userSchema.pre('save', async function(next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
  });

const User = mongoose.model('user', userSchema);

module.exports = User;