// Import mongoose schema
const Person = require("../models/person");

// Object to export
module.exports = {
  getReport: async (req, res) => {
    try {
      const myItems = await Person.find().exec();
      console.log(myItems);
      res.render("report.ejs", { quotes: myItems });
    } catch (err) {
      console.log(err);
    }
  },
};
