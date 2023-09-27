// Import the Express & create a router object
const express = require("express");
const router = express.Router();

// Import search controllers
const searchController = require("../controllers/search");

//  For every request, define the function to execute
router.get("/", searchController.getSearch);
// router.post("/results", searchController.searchPerson);

// Export router object
module.exports = router;
