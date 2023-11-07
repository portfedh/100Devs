// Import Mongoose model
const Comment = require("../models/Comments");

module.exports = {
  // Async function
  createComment: async (req, res) => {
    try {
      // Use Mongoose Post model
      await Comment.create({
        // Get the comment from the form body
        comment: req.body.comment,
        likes: 0,
        // Get the post id from the url id parameter
        post: req.params.id,
      });
      console.log("Comment has been added!");
      // Redirect to post page where comment was made
      res.redirect("/post/" + req.params.id);
      // Handle any errors
    } catch (err) {
      console.log(err);
    }
  },
};
