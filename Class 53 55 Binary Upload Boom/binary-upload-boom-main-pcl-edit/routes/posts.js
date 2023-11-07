// Imports
const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const postsController = require("../controllers/posts");

// Save as variable to call it directly
const { ensureAuth, ensureGuest } = require("../middleware/auth");

// Post Routes
// Uses parameter ':id'
router.get("/:id", ensureAuth, postsController.getPost);
router.post("/createPost", upload.single("file"), postsController.createPost);
router.put("/likePost/:id", postsController.likePost);
router.delete("/deletePost/:id", postsController.deletePost);

// Export router object
module.exports = router;
