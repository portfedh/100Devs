// Import passport.js strategy
const LocalStrategy = require("passport-local").Strategy;
// Import mongoose
const mongoose = require("mongoose");
// Import user module
const User = require("../models/User");

module.exports = function (passport) {
  // Create a new local authentication strategy.
  passport.use(
    new LocalStrategy(
      // Use the email as the username field.
      { usernameField: "email" },
      async (email, password, done) => {
        try {
          //Try to find a user in the database by their email:
          const user = await User.findOne({ email: email.toLowerCase() });
          // If no user is found, the done callback is called with an error message
          if (!user) {
            console.log("Email not found.");
            return done(null, false, { msg: `Email ${email} not found.` });
          }
          // If the user exists but doesn't have a password (possibly registered through a sign-in provider like OAuth),
          // the done callback is called with a message explaining how to set a password.
          if (!user.password) {
            console.log("User has no password.");
            return done(null, false, {
              msg: "Your account was registered using a sign-in provider. To enable password login, sign in using a provider, and then set a password under your user profile.",
            });
          }
          // If the user has a password, compare the provided password:
          const isMatch = await user.comparePassword(password);
          // If password matches, the done callback is called with the authenticated user.
          if (isMatch) {
            return done(null, user);
          }
          // If the password doesn't match, return an error message:
          console.log("Invalid email or password.");
          return done(null, false, { msg: "Invalid email or password." });
          // Catch and return the error using the done callback.
        } catch (err) {
          console.error("Error in passport.js:", err);
          return done(err);
        }
      }
    )
  );
  // Saves the user's ID in the session
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });
  // Retrieves the user's data based on the saved ID during subsequent requests
  passport.deserializeUser(async (id, done) => {
    try {
      const user = await User.findById(id);
      done(null, user);
    } catch (err) {
      done(err, null);
    }
  });
};
