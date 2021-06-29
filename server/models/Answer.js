const mongoose = require("mongoose");

const answerSchema = new mongoose.Schema(
  {
    body: {
      description: {
        type: String,
        required: true,
      },
      upvotes: {
        type: Number,
        default: 0,
      },
      downvotes: {
        type: Number,
        default: 0,
      },
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Answer", answerSchema);
