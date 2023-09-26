// Import Report Mongoose Schema
const Report = require("../models/report");

// Object that contains the properties and methods
// Will be accessible when this module is imported
// in another part of the application.
module.exports = {
  // Define a property named getIndex
  getReport: async (req, res) => {
    try {
      const myItems = await Report.find()
        .toArray()
        .then((results) => {
          console.log(results);
          // Render page with EJS and database results
          res.render("report.ejs", { quotes: results });
        });
    } catch (err) {
      console.log(err);
    }
    // Gets quotes from database
    collection
      .toArray()
      .then((results) => {
        console.log(results);
        // Render page with EJS and database results
        res.render("report.ejs", { quotes: results });
      })
      .catch((error) => console.error(error));
  },
};
