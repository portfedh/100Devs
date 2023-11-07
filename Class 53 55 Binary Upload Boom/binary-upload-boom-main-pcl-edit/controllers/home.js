// Export module
module.exports = {
  // Get index method
  getIndex: (req, res) => {
    // Render index.ejs
    res.render("index.ejs");
  },
};
