// Import express
// const express = require("express");
// const app = express();

// New imports:
// ************
// Import mongoose library
// const mongoose = require("mongoose");
// Import passport library
// const passport = require("passport");
// Allows session management for express applications.
// const session = require("express-session");
// Used to store session data in MongoDb
const MongoStore = require("connect-mongo")(session);
// To display temporary messages to the user
// const flash = require("express-flash");
// For login requests and responses, for debugging and monitoring
// const logger = require("morgan");

// Database URL and PORTs
// const connectDB = require("./config/database");
// Get Home page routes
// const mainRoutes = require("./routes/main");
// Get ToDo's page routes
// const todoRoutes = require("./routes/todos");

// Get enviroment variables
//require("dotenv").config({ path: "./config/.env" });

// Passport config
// require("./config/passport")(passport);

// Connect to the database
//connectDB();

// Configure the Express settings
// ==============================
// Set the view engine to 'ejs'.
// app.set("view engine", "ejs");
// Serve static files from the 'public' directory.
// app.use(express.static("public"));
// So server can read data from html elements:
// app.use(express.urlencoded({ extended: true }));
// So sever can read JSON data.
// app.use(express.json());

// Use dev format in logger, for debugging and monitoring
// app.use(logger("dev"));

// Use express session management
app.use(
  session({
    // String to sign the session ID cookie
    secret: "keyboard cat",
    // Session wont be saved on every request
    // Only after data is modified
    resave: false,
    // Session only created if data is stored in it
    saveUninitialized: false,
    // Save session data using Mongostore into database
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
  })
);
// Passport middleware
// *******************
// Start and prepare for authentication
app.use(passport.initialize());
// Use sessions for user authentication
app.use(passport.session());
// Enable application to send success or error messages to user.
app.use(flash());

// Listen to main routes
// app.use("/", mainRoutes);
// Listen to ToDo's routes:
// app.use("/todos", todoRoutes);

// Start the Express application, listening on the specified port.
// app.listen(process.env.PORT, () => {
//  console.log("Server is running, you better catch it!");
// });
