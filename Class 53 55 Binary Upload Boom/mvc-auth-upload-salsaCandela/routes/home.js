// Home Routes
// ===========

// Imports
// *******
// Express & create a router object
const express = require("express");
const router = express.Router();
// Multer
const upload = require("../middleware/multer");
// Controllers
const homeCtrl = require("../controllers/home");
const authCtrl = require("../controllers/auth");

// Routes
// ******

// Home
router.get("/", homeCtrl.getIndex);
// Party routes
router.get("/party", homeCtrl.getParty);
router.post("/partySignup", upload.single("file"), homeCtrl.createPartyRecord);
// Classes routes
router.post("/enroll", upload.single("file"), homeCtrl.createRecord);
// Authentication routes
router.get("/login", authCtrl.getLogin);
router.post("/login", authCtrl.postLogin);
router.get("/logout", authCtrl.logout);
router.get("/signup", authCtrl.getSignup);
router.post("/signup", authCtrl.postSignup);

// Exports
// *******
module.exports = router;
