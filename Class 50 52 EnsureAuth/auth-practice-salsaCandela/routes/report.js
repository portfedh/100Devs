// Import the Express & create a router object
const express = require("express");
const router = express.Router();

// Import report controllers
const reportController = require("../controllers/report");

//  For every request, define the function to execute
router.get("/", reportController.getReport);

// Export router object
module.exports = router;
