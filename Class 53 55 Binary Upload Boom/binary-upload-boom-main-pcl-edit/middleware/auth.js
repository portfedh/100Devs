// ensureAuth protects pages so only logged in users can access them.

// ensureGuest makes sure logged in users don't see sign in pages if they are already logged in.

// Export both functions
module.exports = {
  // Function with three parameters
  ensureAuth: function (req, res, next) {
    // Search for isAuthenticated property
    if (req.isAuthenticated()) {
      // Execute next function
      return next();
    } else {
      // Or redirect to home page
      res.redirect("/");
    }
  },
  ensureGuest: function (req, res, next) {
    // Opposite, checks that user is NOT authenticated
    if (!req.isAuthenticated()) {
      return next();
    } else {
      res.redirect("/dashboard");
    }
  },
};
