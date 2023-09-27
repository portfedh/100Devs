// Import the Express & create a router object
const express = require("express");
const router = express.Router();

// Import home controllers
const homeController = require("../controllers/home");

//  For every request, define the function to execute
router.get("/", homeController.getIndex);
router.post("/enroll", homeController.createRecord);

// Export router object
module.exports = router;
