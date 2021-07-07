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
    refModel: {
      type: String
    },
    refModelId: {
      type: mongoose.Schema.Types.ObjectId,
      refPath: 'refModel'
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Comment", commentSchema);
