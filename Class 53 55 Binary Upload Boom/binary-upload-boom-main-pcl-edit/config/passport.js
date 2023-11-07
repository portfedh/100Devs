// Import modules
const LocalStrategy = require("passport-local").Strategy;
const mongoose = require("mongoose");
const User = require("../models/User");

// Export function
module.exports = function (passport) {
  // Use  Passport.js localStrategy
  passport.use(
    new LocalStrategy({ usernameField: "email" }, (email, password, done) => {
      // Try to find a user with the provided email in the User model
      User.findOne({ email: email.toLowerCase() }, (err, user) => {
        if (err) {
          // Handle any database error by calling 'done' with the error
          return done(err);
        }
        if (!user) {
          // If no user is found with the provided email, return a failure message
          return done(null, false, { msg: `Email ${email} not found.` });
        }
        if (!user.password) {
          // If the user's password field is empty, it means they use a sign-in provider,
          // so return a message suggesting they set a password in their user profile
          return done(null, false, {
            msg: "Your account was registered using a sign-in provider. To enable password login, sign in using a provider, and then set a password under your user profile.",
          });
        }
        // Compare the provided password with the stored hashed password
        user.comparePassword(password, (err, isMatch) => {
          if (err) {
            // Handle any comparison error by calling 'done' with the error
            return done(err);
          }
          if (isMatch) {
            // If the passwords match, return the user as authenticated
            return done(null, user);
          }
          // If passwords don't match, return a failure message
          return done(null, false, { msg: "Invalid email or password." });
        });
      });
    })
  );

  // Serialize the user into a session by their 'id'
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  // Deserialize the user from a session by their 'id'
  passport.deserializeUser((id, done) => {
    // Look up the user by their 'id' and call 'done' with the user or an error
    User.findById(id, (err, user) => done(err, user));
  });
};

// The serializeUser function is responsible for serializing a user object into a format that can be stored in the session.
// It stores the user's ID, which allows Passport to recognize and authenticate the user in future requests.
