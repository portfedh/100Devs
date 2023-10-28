// Check if user is authenticated
// ******************************

module.exports = {
  // Function with three parameters: req, res, next
  ensureAuth: function (req, res, next) {
    // Run passport function: isAuthenticated()
    if (req.isAuthenticated()) {
      // If return is true, call express function next()
      // Continues processing request
      return next();
    } else {
      // If return is false, redirect to home
      res.redirect("/");
    }
  },
};
