// Import express
const express = require("express");

// Create an express router
// Used to define a set of routes for handling HTTP requests
const router = express.Router();

// Import the controller modules
const homeController = require("../controllers/home");

// Import passport strategy
const authController = require("../controllers/auth");

// Check: Neither is used & ensureGuest doesn't exist
const { ensureAuth, ensureGuest } = require("../middleware/auth");

// Routes
// *******
router.get("/", homeController.getIndex);
router.get("/login", authController.getLogin);
router.post("/login", authController.postLogin);
router.get("/logout", authController.logout);
router.get("/signup", authController.getSignup);
router.post("/signup", authController.postSignup);

// Export the router object so other scripts can import it
module.exports = router;
