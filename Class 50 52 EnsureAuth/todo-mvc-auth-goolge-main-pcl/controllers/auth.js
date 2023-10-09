// Import passport.js library
const passport = require("passport");
// Import library for input validation
const validator = require("validator");
// Import User model Schema
const User = require("../models/User");

// getLogin function
// *****************
exports.getLogin = (req, res) => {
  if (req.user) {
    // Checks if there is an authenticated user stored in req.user
    // If so, redirect to /todos page
    return res.redirect("/todos");
  }
  // If not render a view named login with a title 'Login'
  res.render("login", {
    title: "Login",
  });
};

// postLogin function
// ******************
exports.postLogin = (req, res, next) => {
  // Empty array for validation errors
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
    req.logIn(user, (err) => {
      if (err) {
        return next(err);
      }
      // Log in the user and redirect them to their requested page or todos
      req.flash("success", { msg: "Success! You are logged in." });
      res.redirect(req.session.returnTo || "/todos");
    });
  })(req, res, next);
};

// logout function
// ***************
exports.logout = (req, res) => {
  // Call logout() from passport.js
  req.logout(() => {
    // Confirmation message
    console.log("User has logged out.");
  });
  // Destroy method on user session
  req.session.destroy((err) => {
    // If there is an error
    if (err)
      console.log("Error : Failed to destroy the session during logout.", err);
    // Sets user to null to ensure user is no longer authenticated even with an error.
    req.user = null;
    // Redirect to root url as a final
    res.redirect("/");
  });
};

// Handle get request for sign up page
// ***********************************
exports.getSignup = (req, res) => {
  // Check request body for user object
  // User object exists if user has been authenticated
  if (req.user) {
    // Redirects to the todo's page
    return res.redirect("/todos");
  }
  // If not authenticated, take them to signup page
  res.render("signup", {
    title: "Create Account",
  });
};

// Function to process signup requests
// ***********************************
exports.postSignup = (req, res, next) => {
  // Store validation errors
  const validationErrors = [];
  // Check if email address is a valid email
  if (!validator.isEmail(req.body.email))
    // Add message with error to validator array
    validationErrors.push({ msg: "Please enter a valid email address." });
  // Check if password length is larger than the minimum
  if (!validator.isLength(req.body.password, { min: 8 }))
    // Add message with error to validator array
    validationErrors.push({
      msg: "Password must be at least 8 characters long",
    });
  // Check that password and confirmation match
  if (req.body.password !== req.body.confirmPassword)
    // Add message with error to validator array
    validationErrors.push({ msg: "Passwords do not match" });
  // Check Array to see if any errors were found
  if (validationErrors.length) {
    // Store errors in flash storage
    // To display error messages to user
    req.flash("errors", validationErrors);
    // Redirects user to signup page if errors are found
    // Wil display the errors to the user
    return res.redirect("../signup");
  }
  // Normalize email address for storage
  req.body.email = validator.normalizeEmail(req.body.email, {
    gmail_remove_dots: false,
  });
  // Creates a new user using information in the request body
  const user = new User({
    userName: req.body.userName,
    email: req.body.email,
    password: req.body.password,
  });
  // Check if there existing user with the same email or username
  User.findOne(
    // Use findOne method
    // Search 'User' collection
    { $or: [{ email: req.body.email }, { userName: req.body.userName }] },
    (err, existingUser) => {
      // If there is an error, call next() function to pass the error to the next middleware
      if (err) {
        return next(err);
      }
      // If an existing user is found, store error message in flash storage
      if (existingUser) {
        req.flash("errors", {
          msg: "Account with that email address or username already exists.",
        });
        return res.redirect("../signup");
      }
      // If no user is found, save the new user to database
      // If any errors are found, call next() function to pass the error to the next middleware
      user.save((err) => {
        if (err) {
          return next(err);
        }
        // If save was successful, log in the user using logIn() method
        req.logIn(user, (err) => {
          // If any errors are found, call next() function to pass the error to the next middleware
          if (err) {
            return next(err);
          }
          // After user creation and login, redirect to users /todo page
          res.redirect("/todos");
        });
      });
    }
  );
};
