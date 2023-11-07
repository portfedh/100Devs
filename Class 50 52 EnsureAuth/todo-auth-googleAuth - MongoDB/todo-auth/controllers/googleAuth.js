const passport = require("passport");

// Description: Authenticate with Google
// Route: GET /auth/google
exports.getLogin = (req, res) => {
  passport.authenticate("google", { scope: ["profile"] })(req, res);
};
// Description: Google auth callback
// Route: GET /auth/google/callback
exports.getLoginCallback = (req, res) => {
  passport.authenticate("google", { failureRedirect: "/" })(req, res, () => {
    console.log("Authentication was successful");
    res.redirect("/signup");
  });
};

// Description: Logout user
// Route: GET /auth/logout
exports.logout = (req, res) => {
  req.logout();
  console.log("User has been logged out.");
  res.redirect("/");
};
