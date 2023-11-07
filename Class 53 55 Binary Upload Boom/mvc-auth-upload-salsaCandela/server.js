// Environment variables
// =====================
const result = require("dotenv").config({ path: "./config/.env" });

// Database
// ========
const connectDB = require("./config/database");
connectDB();

// Express
// =======
// Imports
const express = require("express");
const app = express();
// Set template engine EJS:
app.set("view engine", "ejs");
// Serve static files from the 'public' directory.
app.use(express.static("public"));
// Enable reading JSON data:
app.use(express.json());
// Enable reading from html elements:
app.use(express.urlencoded({ extended: true }));
// Enable access to public folder
app.use(express.static("public"));

// Authentication:
// ===============
// Import mongoose library
const mongoose = require("mongoose");
// Import passport library
const passport = require("passport");
// Import session management for express applications.
const session = require("express-session");
// Import o display temporary messages to the user
const flash = require("express-flash");
// Import for debugging and monitoring
const logger = require("morgan");
// Import Passport configuration
require("./config/passport")(passport);

// Use dev format in logger, for debugging and monitoring
app.use(logger("dev"));
// // Used to store session data in MongoDb
const MongoStore = require("connect-mongo")(session);
// // Configure express-session with connect-mongo
app.use(
  session({
    // String to sign the session ID cookie
    secret: "keyboard cat",
    // Session wont be saved on every request
    // Only after data is modified
    resave: false,
    // Session only created if data is stored in it
    saveUninitialized: false,
    // Save session data using MongoStore into database
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
  })
);
// Start and prepare passport for authentication
app.use(passport.initialize());
// Use sessions for user authentication
app.use(passport.session());
// Enable application to send success or error messages to user.
app.use(flash());

// Routes:
// =======
// Route imports
const homeRoutes = require("./routes/home");
const searchRoutes = require("./routes/search");
const reportRoutes = require("./routes/report");
// Listening routes
app.use("/", homeRoutes);
app.use("/search", searchRoutes);
app.use("/report", reportRoutes);

// Server Port
// ===========
app.listen(process.env.PORT || PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
