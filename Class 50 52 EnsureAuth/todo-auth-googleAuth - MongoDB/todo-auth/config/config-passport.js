const LocalStrategy = require("passport-local").Strategy;
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const User = require("../models/User");
const gUser = require("../models/GoogleUser");

module.exports = function (passport) {
  // Local Authentication Strategy
  passport.use(
    new LocalStrategy({ usernameField: "email" }, (email, password, done) => {
      User.findOne({ email: email.toLowerCase() }, (err, user) => {
        if (err) {
          return done(err);
        }
        if (!user) {
          return done(null, false, { msg: `Email ${email} not found.` });
        }
        if (!user.password) {
          return done(null, false, {
            msg: "Your account was registered using a sign-in provider. To enable password login, sign in using a provider, and then set a password under your user profile.",
          });
        }
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

  // Google OAuth Authentication Strategy
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "/auth/google/callback",
      },
      async (accessToken, refreshToken, profile, done) => {
        // Get data from Google signup
        const newUser = {
          googleId: profile.id,
          displayName: profile.displayName,
          firstName: profile.name.givenName,
          lastName: profile.name.familyName,
          image: profile.photos[0].value,
        };

        // Check if user already exists
        try {
          let user = await gUser.findOne({ googleId: profile.id });
          if (user) {
            done(null, user);
          } else {
            user = await gUser.create(newUser);
            done(null, user);
          }
        } catch (err) {
          console.error(err);
        }
      }
    )
  );

  // Serialize and deserialize functions
  passport.serializeUser((user, done) => {
    console.log("Serializing user with ID:", user.id);
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    // Check both local and Google users
    // Try local user version first
    User.findById(id, (err, user) => {
      if (user) {
        console.log("Deserializing local user with ID:", id);
        return done(err, user);
      } else {
        // Check for google user after
        gUser.findById(id, (err, user) => {
          if (user) {
            console.log("Deserializing Google user with ID:", id);
            return done(err, user);
          } else {
            console.error("User not found for ID:", id);
            return done(err, null);
          }
        });
      }
    });
  });
};
