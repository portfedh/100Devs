// Import express
const express = require("express");

// Create an express router
// Used to define a set of routes for handling HTTP requests
const router = express.Router();

// Get the controller logic for the home page
const homeController = require("../controllers/home");

// New code: Authorization
// ************************
const authController = require("../controllers/auth");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

// If GET route on home page is called, run getIndex method
router.get("/", homeController.getIndex);

// New routes:
// ***********
router.get("/login", authController.getLogin);
router.post("/login", authController.postLogin);
router.get("/logout", authController.logout);
router.get("/signup", authController.getSignup);
router.post("/signup", authController.postSignup);

// Export the router object so other scripts can import it
module.exports = router;
