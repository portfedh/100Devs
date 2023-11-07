// Imports
const express = require("express");
const router = express.Router();
const commentsController = require("../controllers/comments");

// Save as variable to call it directly
const { ensureAuth, ensureGuest } = require("../middleware/auth");

// Post Routes
router.post("/createComment/:id", commentsController.createComment);

// Export router object
module.exports = router;
