// Imports
const express = require("express");
const router = express.Router();
const localAuthController = require("../controllers/localAuth");
const googleAuthController = require("../controllers/googleAuth");
const homeController = require("../controllers/home");

// Index routes
router.get("/", homeController.getIndex);

// Local-auth routes
router.get("/login", localAuthController.getLogin);
router.post("/login", localAuthController.postLogin);
router.get("/logout", localAuthController.logout);
router.get("/signup", localAuthController.getSignup);
router.post("/signup", localAuthController.postSignup);

// Google-auth route
router.get("/auth/google", googleAuthController.getLogin);
router.get("/auth/google/callback", googleAuthController.getLoginCallback);

module.exports = router;
