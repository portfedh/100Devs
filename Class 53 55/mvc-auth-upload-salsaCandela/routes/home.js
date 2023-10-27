// Import the Express & create a router object
const express = require("express");
const router = express.Router();

// Import multer
const upload = require("../middleware/multer");

// Import home controllers
const homeController = require("../controllers/home");

// Import passport strategy
const authController = require("../controllers/auth");

// Routes
router.get("/", homeController.getIndex);
router.get("/party", homeController.getParty);
router.post("/enroll", upload.single("file"), homeController.createRecord);

// Authentication routes
router.get("/login", authController.getLogin);
router.post("/login", authController.postLogin);
router.get("/logout", authController.logout);
router.get("/signup", authController.getSignup);
router.post("/signup", authController.postSignup);

// Export router object
module.exports = router;
