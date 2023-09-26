// Import the Express.js framework
const express = require("express");

// Create new router object
const router = express.Router();

// Import a module named homeController
// From a file in the "../controllers/home" directory.
const searchController = require("../controllers/report");

// When a GET request is made to the root URL '/'
// Execute the getIndex() function from the homeController module
router.get("/", searchController.getReport);

// Exports the router object
module.exports = router;
