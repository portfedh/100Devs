// Export module
module.exports = {
  // Method to render index.ejs
  getIndex: (req, res) => {
    res.render("index.ejs");
  },
};
