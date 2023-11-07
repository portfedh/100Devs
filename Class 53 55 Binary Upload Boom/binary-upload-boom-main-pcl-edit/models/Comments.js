//  Import the Mongoose library
const mongoose = require("mongoose");

// Define new Mongoose schema
const CommentSchema = new mongoose.Schema({
  comment: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
    required: true,
  },
  // Uses the ID of the post
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post",
  },
  // Timestamp is not provided by user
  // Its created automatically with record
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Exports model named "Comment" based on the "PostSchema
module.exports = mongoose.model("Comment", CommentSchema);
