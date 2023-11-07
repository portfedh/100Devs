// Loads the dotenv library and calls its config() function.
// Loads environment variables from a .env file into process.env
require("dotenv").config();

// Module to create HTTP error objects with status codes and error messages.
var createError = require("http-errors");

// Imports the Express.js framework, to simplify web applications in Node.js.
var express = require("express");

// Built-in Node.js module used for working with file and directory paths.
var path = require("path");

// Middleware to parse cookies attached to the incoming HTTP requests.
var cookieParser = require("cookie-parser");

// Middleware for HTTP request logging.
var logger = require("morgan");

// Middleware to enable sessions to store user data between requests.
var session = require("express-session");

//  Middleware for handling authentication in Node.js applications.
var passport = require("passport");

// Sets up session storage using SQLite
var SQLiteStore = require("connect-sqlite3")(session);

// Imports for route handlers
// **************************
var indexRouter = require("./routes/index");
var indexRouter = require("./routes/index");
var authRouter = require("./routes/auth");

// Creates an Express application instance
var app = express();

// Allows us to access the pluralize library globally in our views and routes
app.locals.pluralize = require("pluralize");

// Set the views directory
app.set("views", path.join(__dirname, "views"));

// Set the view engine to EJS
app.set("view engine", "ejs");

// Middleware
// Configure requests logging in "dev" format
app.use(logger("dev"));
// Parse JSON request
app.use(express.json());
// Parse URL-encoded requests
app.use(express.urlencoded({ extended: false }));
// Parses cookies
app.use(cookieParser());
// Serve static files from the "public" directory.
app.use(express.static(path.join(__dirname, "public")));

// Configure express-session
// Sessions are used to store user-specific data between HTTP requests
// They allow us to maintain user authentication and other session-related information.
app.use(
  session({
    //  Secret string used to sign the session ID cookie.
    secret: "keyboard cat",
    // Save happens only if changes are detected
    resave: false,
    // Session wont be saved for empty sessions
    saveUninitialized: false,
    // Uses the connect-sqlite3 package to store data in an SQLite database
    store: new SQLiteStore({ db: "sessions.db", dir: "./var/db" }),
  })
);

// Configure Passport.js to use the "session" strategy for authentication.
app.use(passport.authenticate("session"));

// Route handling
app.use("/", indexRouter);
app.use("/", indexRouter);
app.use("/", authRouter);
// Catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// Error handler
app.use(function (err, req, res, next) {
  // Set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // Render the error page
  res.status(err.status || 500);
  res.render("error");
});

// Exports the express application
module.exports = app;
