// Export the function so other scripts can import it
module.exports = {
  // Function named getIndex(request, response)
  getIndex: (req, res) => {
    // When called, as a response, it renders index.ejs template
    res.render("index.ejs");
  },
};
