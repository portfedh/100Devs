// Import the Express.js
var express = require("express");

// Imports the Passport.js
var passport = require("passport");

//  Imports the Passport Google OIDC (OpenID Connect) strategy.
// This strategy is used for authenticating users via Google's OIDC protocol.
var GoogleStrategy = require("passport-google-oidc");

// Import database in the parent directory
var db = require("../db");

// Creates an Express Router instance
var router = express.Router();

//  Configures Passport to use the Google OIDC strategy
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env["GOOGLE_CLIENT_ID"],
      clientSecret: process.env["GOOGLE_CLIENT_SECRET"],
      callbackURL: "/oauth2/redirect/google",
      scope: ["profile"],
    },
    function verify(issuer, profile, cb) {
      db.get(
        "SELECT * FROM federated_credentials WHERE provider = ? AND subject = ?",
        [issuer, profile.id],
        function (err, row) {
          if (err) {
            return cb(err);
          }
          if (!row) {
            db.run(
              "INSERT INTO users (name) VALUES (?)",
              [profile.displayName],
              function (err) {
                if (err) {
                  return cb(err);
                }

                var id = this.lastID;
                db.run(
                  "INSERT INTO federated_credentials (user_id, provider, subject) VALUES (?, ?, ?)",
                  [id, issuer, profile.id],
                  function (err) {
                    if (err) {
                      return cb(err);
                    }
                    var user = {
                      id: id,
                      name: profile.displayName,
                    };
                    return cb(null, user);
                  }
                );
              }
            );
          } else {
            db.get(
              "SELECT * FROM users WHERE id = ?",
              [row.user_id],
              function (err, row) {
                if (err) {
                  return cb(err);
                }
                if (!row) {
                  return cb(null, false);
                }
                return cb(null, row);
              }
            );
          }
        }
      );
    }
  )
);

// Logs user out and redirect to root ("/")
router.post("/logout", function (req, res, next) {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
});

// Determines how user data should be stored in the session
passport.serializeUser(function (user, cb) {
  process.nextTick(function () {
    cb(null, { id: user.id, username: user.username, name: user.name });
  });
});

// Retrieve user data from the session and attach it to the req.user object
passport.deserializeUser(function (user, cb) {
  process.nextTick(function () {
    return cb(null, user);
  });
});

// Render "login" view,
router.get("/login", function (req, res, next) {
  res.render("login");
});

// Initiates the Google OIDC authentication flow.
router.get("/login/federated/google", passport.authenticate("google"));

// Handles the callback from Google after a user has authenticated
// Depending on the success or failure of authentication
router.get(
  "/oauth2/redirect/google",
  passport.authenticate("google", {
    successRedirect: "/",
    failureRedirect: "/login",
  })
);

// Exports the Express Router instance
module.exports = router;
