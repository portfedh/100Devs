// Import cloudinary connection
const cloudinary = require("../middleware/cloudinary");
// Import Mongoose model
const Post = require("../models/Post");

module.exports = {
  // Async functions

  getProfile: async (req, res) => {
    try {
      // Find posts from user id
      const posts = await Post.find({ user: req.user.id });
      // Render profile.ejs passing data to the template
      res.render("profile.ejs", { posts: posts, user: req.user });
    } catch (err) {
      console.log(err);
    }
  },

  getFeed: async (req, res) => {
    try {
      // Find all posts and sort descending
      // .lean() transformas a Mongoose object into a JSON object
      const posts = await Post.find().sort({ createdAt: "desc" }).lean();
      // Render feed.ejs passing data to the template
      res.render("feed.ejs", { posts: posts });
    } catch (err) {
      console.log(err);
    }
  },

  getPost: async (req, res) => {
    try {
      // Search for a post in the database by its ID
      const post = await Post.findById(req.params.id);
      // Pass post data to template engine
      // Pass authenticated user data to template
      res.render("post.ejs", { post: post, user: req.user });
    } catch (err) {
      console.log(err);
    }
  },

  createPost: async (req, res) => {
    try {
      // Upload image to cloudinary from file path
      // Result contains the URL and public ID for the image
      const result = await cloudinary.uploader.upload(req.file.path);
      // Use Mongoose Post model
      await Post.create({
        title: req.body.title,
        // Include uploaded image url
        image: result.secure_url,
        // Include the id of the image
        cloudinaryId: result.public_id,
        caption: req.body.caption,
        likes: 0,
        user: req.user.id,
      });
      console.log("Post has been added!");
      // Redirect to profile page
      res.redirect("/profile");
      // Handle any errors
    } catch (err) {
      console.log(err);
    }
  },

  likePost: async (req, res) => {
    try {
      await Post.findOneAndUpdate(
        // Search for post by its _id
        // Use request.params.id
        { _id: req.params.id },
        // $inc --> increment
        // likes --> field to increment
        // 1 --> amount to increment
        {
          $inc: { likes: 1 },
        }
      );
      console.log("Likes +1");
      // Reload page to reflect updated likes
      res.redirect(`/post/${req.params.id}`);
      // Handle errors
    } catch (err) {
      console.log(err);
    }
  },

  deletePost: async (req, res) => {
    try {
      // Find post by id
      let post = await Post.findById({ _id: req.params.id });
      // Delete image from cloudinary
      await cloudinary.uploader.destroy(post.cloudinaryId);
      // Delete post from db
      await Post.remove({ _id: req.params.id });
      console.log("Deleted Post");
      // Redirect to profile page
      res.redirect("/profile");
    } catch (err) {
      res.redirect("/profile");
    }
  },
};
