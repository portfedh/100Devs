const Person = require("../models/person");

// Object that contains the properties and methods
// Will be accessible when this module is imported
// in another part of the application.
module.exports = {
  // getIndex function
  getIndex: (req, res) => {
    // Render page
    res.render("index.ejs");
  },
  // addRecord function
  addRecord: async (req, res) => {
    try {
      const personData = req.body;
      const person = new Person(personData);
      person.save().then((result) => {
        console.log(result);
        // Render confirmation page with variables
        res.render("confirmation.ejs", {
          idAlumno: result._id.toString(), // Use _id instead of insertedId
          qrWww:
            "https://api.qrserver.com/v1/create-qr-code/?data=" +
            result._id.toString() +
            "&amp;size=200x200",
          nombreAlumno: req.body.first_name + " " + req.body.last_name,
        });
      });
    } catch (err) {
      console.log(err);
    }
  },
};
