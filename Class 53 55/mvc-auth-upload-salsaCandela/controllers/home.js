// Import cloudinary
const cloudinary = require("../middleware/cloudinary");

// Import mongoose schema
const Person = require("../models/person");

// Object to be exported
module.exports = {
  // Serve index
  getIndex: (req, res) => {
    res.render("index.ejs");
  },
  // Create record
  createRecord: async (req, res) => {
    try {
      const result = await cloudinary.uploader.upload(req.file.path);
      console.log("saved to cloudinary");
      // Create record using mongoose schema
      const person = new Person({
        ...req.body,
        cloudinaryId: result.public_id,
      });
      person.save().then((result) => {
        console.log(result);
        // Render confirmation page
        res.render("confirmation.ejs", {
          // Include id variable and QR string
          idAlumno: result._id.toString(),
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
