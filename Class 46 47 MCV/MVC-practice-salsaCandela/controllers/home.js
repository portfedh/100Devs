const Todo = require("../models/person");

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

// app.post("/inscribir", (req, res) => {
//   collection
//     // Insert record into database
//     .insertOne(req.body)
//     .then((result) => {
//       console.log(result);
//       //Render confirmation page with variables
//       res.render("confirmation.ejs", {
//         idAlumno: result.insertedId.toString(),
//         qrWww:
//           "https://api.qrserver.com/v1/create-qr-code/?data=" +
//           result.insertedId.toString() +
//           "&amp;size=200x200",
//         nombreAlumno: req.body.first_name + " " + req.body.last_name,
//       });
//     })
//     .catch((error) => console.error(error));
// });
