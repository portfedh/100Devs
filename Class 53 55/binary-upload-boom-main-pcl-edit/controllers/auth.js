// Imports
// *******

// Authentication middleware
const passport = require("passport");
// Input validation
const validator = require("validator");
// Interaction with database
const User = require("../models/User");

// Login page
exports.getLogin = (req, res) => {
  // Check if user has already logged in
  if (req.user) {
    return res.redirect("/profile");
  }
  // If not, render login page
  res.render("login", {
    title: "Login",
  });
};

// POST request with login attempt
exports.postLogin = (req, res, next) => {
  // Validate inputs
  const validationErrors = [];
  if (!validator.isEmail(req.body.email))
    validationErrors.push({ msg: "Please enter a valid email address." });
  if (validator.isEmpty(req.body.password))
    validationErrors.push({ msg: "Password cannot be blank." });
  // If there are errors, display them and reload login page
  if (validationErrors.length) {
    req.flash("errors", validationErrors);
    return res.redirect("/login");
  }
  // Normalize email by removing dots in email addresses
  req.body.email = validator.normalizeEmail(req.body.email, {
    gmail_remove_dots: false,
  });

  // Check credentials to authenticate
  passport.authenticate("local", (err, user, info) => {
    // Check for errors
    if (err) {
      return next(err);
    }
    if (!user) {
      req.flash("errors", info);
      return res.redirect("/login");
    }
    // If successful, log in user
    req.logIn(user, (err) => {
      if (err) {
        return next(err);
      }
      req.flash("success", { msg: "Success! You are logged in." });
      // Redirect user to the page they were trying to access
      // Or to profile page
      res.redirect(req.session.returnTo || "/profile");
    });
  })(req, res, next);
};

exports.logout = (req, res) => {
  // Clear the user's session or token
  req.logout(() => {
    console.log("User has logged out.");
  });
  // Destroy the user's session
  req.session.destroy((err) => {
    if (err)
      console.log("Error : Failed to destroy the session during logout.", err);
    // Set the req.user property to null
    req.user = null;
    // Redirect to home page
    res.redirect("/");
  });
};

exports.getSignup = (req, res) => {
  // Check if user has been authenticated
  if (req.user) {
    // If so, redirect to the user profile page
    return res.redirect("/profile");
  }
  // If not, render signup page
  res.render("signup", {
    title: "Create Account",
  });
};

exports.postSignup = (req, res, next) => {
  // Validate inputs
  const validationErrors = [];
  if (!validator.isEmail(req.body.email))
    validationErrors.push({ msg: "Please enter a valid email address." });
  if (!validator.isLength(req.body.password, { min: 8 }))
    validationErrors.push({
      msg: "Password must be at least 8 characters long",
    });
  if (req.body.password !== req.body.confirmPassword)
    validationErrors.push({ msg: "Passwords do not match" });
  // If there are errors, display errors & redirect to signup page
  if (validationErrors.length) {
    req.flash("errors", validationErrors);
    return res.redirect("../signup");
  }
  // Normalize email by removing dots in email addresses
  req.body.email = validator.normalizeEmail(req.body.email, {
    gmail_remove_dots: false,
  });

  // Create a new User object with data from the request body
  const user = new User({
    userName: req.body.userName,
    email: req.body.email,
    password: req.body.password,
  });
  // Query the database
  User.findOne(
    // Check if username or email have been registered before.
    { $or: [{ email: req.body.email }, { userName: req.body.userName }] },
    (err, existingUser) => {
      if (err) {
        return next(err);
      }
      if (existingUser) {
        req.flash("errors", {
          msg: "Account with that email address or username already exists.",
        });
        return res.redirect("../signup");
      }
      // After checks, save user
      user.save((err) => {
        if (err) {
          return next(err);
        }
        // And redirect to profile page
        req.logIn(user, (err) => {
          if (err) {
            return next(err);
          }
          res.redirect("/profile");
        });
      });
    }
  );
};
