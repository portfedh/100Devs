// Import express
const express = require("express");

// Create an express router
// Used to define a set of routes for handling HTTP requests
const router = express.Router();

// Get the controller logic for the home page
const homeController = require("../controllers/home");

// If GET route on home page is called, run getIndex method
router.get("/", homeController.getIndex);

// Export the router object so other scripts can import it
module.exports = router;
