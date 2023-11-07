// ensureAuth allows authenticated users and redirects unauthenticated users to "/" URL
// ensureGuest allows unauthenticated users and redirects authenticated users to  "/dashboard" URL

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
    if (!req.isAuthenticated()) {
      return next();
    } else {
      res.redirect("/dashboard");
    }
  },
};
