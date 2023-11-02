// Import Mongoose model
const Comment = require("../models/Comments");

module.exports = {
  // Async functions

  createComment: async (req, res) => {
    try {
      // Use Mongoose Post model
      await Comment.create({
        comment: req.body.comment,
        likes: 0,
        post: req.params.id,
      });
      console.log("Comment has been added!");
      // Redirect to profile page
      res.redirect("/post/" + req.params.id);
      // Handle any errors
    } catch (err) {
      console.log(err);
    }
  },
};
