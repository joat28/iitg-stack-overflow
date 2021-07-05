const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    description: {
      type: String,
      required: true,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    question_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Question",
      default: null,
    },
    answer_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Answer",
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Comment", commentSchema);
