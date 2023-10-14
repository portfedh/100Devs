// Local strategy for passport
const LocalStrategy = require("passport-local").Strategy;
const mongoose = require("mongoose");
const User = require("../models/User");

// Copied from passport documentation

// Export the function
module.exports = function (passport) {
  // Configuration of a Passport strategy.
  passport.use(
    // Setup a local strategy
    // Email should be used as username
    new LocalStrategy({ usernameField: "email" }, (email, password, done) => {
      User.findOne({ email: email.toLowerCase() }, (err, user) => {
        // If theres arn error returns the error to the Passport framework using the done callback.
        if (err) {
          return done(err);
        }
        // If no user is found, returns a failure status
        if (!user) {
          return done(null, false, { msg: `Email ${email} not found.` });
        }
        // If the user is found but does not have a password set returns a failure status with a message
        if (!user.password) {
          return done(null, false, {
            msg: "Your account was registered using a sign-in provider. To enable password login, sign in using a provider, and then set a password under your user profile.",
          });
        }
        // Check if provided password matches the stored password.
        // Callback is called with the result
        user.comparePassword(password, (err, isMatch) => {
          if (err) {
            return done(err);
          }
          if (isMatch) {
            return done(null, user);
          }
          return done(null, false, { msg: "Invalid email or password." });
        });
      });
    })
  );

  // Configure the serialization of a user object to the session.
  // Store user.id  in the session for subsequent requests to identify the user.
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  // Given a user's ID stored in the session, look up the user in the database and call the 'done' callback.
  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => done(err, user));
  });
};
