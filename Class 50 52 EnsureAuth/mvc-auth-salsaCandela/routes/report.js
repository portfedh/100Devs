// Import the Express & create a router object
const express = require("express");
const router = express.Router();

//Import ensure authorization function
// ***********************************
// Imports specific function from module
// So it can be called directly as: ensureAuth
// Instead of: 'middleware.auth.ensureAuth'
const { ensureAuth } = require("../middleware/auth");

// Import report controllers
const reportController = require("../controllers/report");

//  For every request, define the function to execute
router.get("/", ensureAuth, reportController.getReport);

// Export router object
module.exports = router;
