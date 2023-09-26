// Object that contains the properties and methods
// Will be accessible when this module is imported
// in another part of the application.
module.exports = {
  // Define a property named getIndex
  getIndex: (req, res) => {
    // Render page
    res.render("index.ejs");
  },
};
