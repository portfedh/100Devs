// Imports
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const passport = require("passport");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const flash = require("express-flash");
const logger = require("morgan");
const connectDB = require("./config/database");
const mainRoutes = require("./routes/main");
const todoRoutes = require("./routes/todos");
// const googleAuthRoutes = require("./routes/auth");

// Environment variables
require("dotenv").config({ path: "./config/.env" });

// Passport configuration
require("./config/config-passport")(passport);

// Connect to database
connectDB();

// Express configuration
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger("dev"));

// Session setup
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

// Listening routes
app.use("/", mainRoutes);
app.use("/todos", todoRoutes);

// Listening port
const PORT = process.env.PORT || 2121;
app.listen(PORT, console.log(`Server running on port ${PORT}`));
