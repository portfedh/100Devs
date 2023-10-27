// Import the Express & create a router object
const express = require("express");
const router = express.Router();

// Import search controllers
const searchController = require("../controllers/search");

//  Party Search
router.get("/", searchController.getPartySearch);
router.post("/", searchController.searchPartyPerson);

// Export router object
module.exports = router;
