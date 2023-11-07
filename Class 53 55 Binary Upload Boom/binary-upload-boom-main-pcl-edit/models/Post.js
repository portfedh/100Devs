//  Import the Mongoose library
const mongoose = require("mongoose");

// Define new Mongoose schema
const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    require: true,
  },
  cloudinaryId: {
    type: String,
    require: true,
  },
  caption: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
    required: true,
  },
  // Use the id of the user that created the post
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  // Date.now is a built-in JavaScript method
  // Automatically created, not sent by form
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Exports model named "Post" based on the "PostSchema
module.exports = mongoose.model("Post", PostSchema);
