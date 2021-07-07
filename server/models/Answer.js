const mongoose = require("mongoose");

const answerSchema = new mongoose.Schema(
  {
    description: {
      type: String,
      required: true,
    },
    upvotes: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }],
    downvotes: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }],
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    question: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Question"
    },
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Answer", answerSchema);
