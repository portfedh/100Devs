// Auth Routes
// ===========

// ***********
// * Imports *
// ***********
const passport = require("passport");
const validator = require("validator");
const User = require("../models/User");

// *************************
// * GET request: '/login' *
// *************************
exports.getLogin = (req, res) => {
  if (req.user) {
    // Check if there is an authenticated user stored in req.user
    // If so, redirect to defined page
    return res.redirect("/");
  }
  // If not, render a view named login with a title 'Login'
  res.render("auth_login.ejs", {
    title: "Login",
  });
};

// **************************
// * POST request: '/login' *
// **************************
exports.postLogin = (req, res, next) => {
  // Validate inputs
  // ===============
  // Create empty array for validation errors
  const validationErrors = [];
  // Check with library if it's a valid email address
  if (!validator.isEmail(req.body.email))
    validationErrors.push({ msg: "Please enter a valid email address." });
  // Check with library if password is provided
  if (validator.isEmpty(req.body.password))
    validationErrors.push({ msg: "Password cannot be blank." });
  // If array has errors, display them in flash message
  if (validationErrors.length) {
    req.flash("errors", validationErrors);
    // And reload page
    return res.redirect("/login");
  }
  // Normalizes email address to store in consistent format
  req.body.email = validator.normalizeEmail(req.body.email, {
    gmail_remove_dots: false,
  });
  // Check user credentials vs passport local strategy
  passport.authenticate("local", (err, user, info) => {
    // If there is an error, call next middleware and pass error
    if (err) {
      return next(err);
    }
    // If authentication fails
    if (!user) {
      // Store error in flash message
      req.flash("errors", info);
      // Redirect to login page
      return res.redirect("/login");
    }
    // Log in user
    // ===========
    req.logIn(user, (err) => {
      if (err) {
        return next(err);
      }
      // Display log in confirmation message & redirect
      req.flash("success", { msg: "Success! You are logged in." });
      res.redirect(req.session.returnTo || "/");
    });
  })(req, res, next);
};

// **************************
// * Get request: '/logout' *
// **************************
exports.logout = (req, res) => {
  // Call logout() from passport.js
  req.logout(() => {
    // Display confirmation message in server
    console.log("User has logged out.");
  });
  // Destroy method on user session
  req.session.destroy((err) => {
    // If there is an error
    if (err) {
      console.log("Error : Failed to destroy the session during logout.", err);
    }
    // Sets user to null to ensure user is no longer authenticated even with an error.
    req.user = null;
    // Redirect to url
    res.redirect("/");
  });
};

// **************************
// * GET request: '/signup' *
// **************************
exports.getSignup = (req, res) => {
  // Check request body for user object
  // User object exists if user has been authenticated
  if (req.user) {
    // Redirects to the page after authentication
    return res.redirect("/");
  }
  // If not authenticated, take them to signup page
  res.render("auth_signup.ejs", {
    title: "Create Account",
  });
};

// ***************************
// * POST request: '/signup' *
// ***************************
exports.postSignup = async (req, res, next) => {
  try {
    // Validate inputs
    // ===============
    // Empty array to store errors
    const validationErrors = [];
    // Check if email address has a "@" and "." sign
    if (!validator.isEmail(req.body.email))
      validationErrors.push({ msg: "Please enter a valid email address." });
    // Check that password length is adequate
    if (!validator.isLength(req.body.password, { min: 8 }))
      validationErrors.push({
        msg: "Password must be at least 8 characters long",
      });
    // Make sure passwords match
    if (req.body.password !== req.body.confirmPassword)
      validationErrors.push({ msg: "Passwords do not match" });
    // Check array to see if it has errors
    if (validationErrors.length) {
      // Display error to user and reload page
      req.flash("errors", validationErrors);
      return res.redirect("../signup");
    }
    // Makes sure the email is stored with dots
    req.body.email = validator.normalizeEmail(req.body.email, {
      gmail_remove_dots: false,
    });
    // Check database to make sure the username is unique
    // Queries the 'User' model
    const existingUser = await User.findOne({
      $or: [{ email: req.body.email }, { userName: req.body.userName }],
    }).exec();
    // If user exists, show error
    if (existingUser) {
      req.flash("errors", {
        msg: "Account with that email address or username already exists.",
      });
      return res.redirect("../signup");
    }
    // Create user
    // ===========
    // If all validations pass, create a new user
    const user = new User({
      userName: req.body.userName,
      email: req.body.email,
      password: req.body.password,
    });
    // Save it to mongoDB
    await user.save();
    // Log in new user
    req.logIn(user, (err) => {
      if (err) {
        return next(err);
      }
      // Redirect to the page
      res.redirect("/");
    });
  } catch (err) {
    return next(err);
  }
};
