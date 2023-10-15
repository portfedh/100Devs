// Import the Express & create a router object
const express = require("express");
const router = express.Router();

// Import home controllers
const homeController = require("../controllers/home");

// Import passport strategy
const authController = require("../controllers/auth");

// Routes
router.get("/", homeController.getIndex);
router.post("/enroll", homeController.createRecord);

// Authentication routes
router.get("/login", authController.getLogin);
router.post("/login", authController.postLogin);
router.get("/logout", authController.logout);
router.get("/signup", authController.getSignup);
router.post("/signup", authController.postSignup);

// Export router object
module.exports = router;
