// Import mongoose schema
const Person = require("../models/person");
const PartyPerson = require("../models/partyPerson");

// Object to export
module.exports = {
  getClassReport: async (req, res) => {
    try {
      const myItems = await Person.find().exec();
      console.log(myItems);
      res.render("class_report.ejs", { quotes: myItems });
    } catch (err) {
      console.log(err);
    }
  },

  getPartyReport: async (req, res) => {
    try {
      const myItems = await PartyPerson.find().exec();
      console.log(myItems);
      res.render("party_report.ejs", { quotes: myItems });
    } catch (err) {
      console.log(err);
    }
  },
};
