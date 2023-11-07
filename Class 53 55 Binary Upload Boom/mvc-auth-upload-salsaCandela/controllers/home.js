// Home Controllers
// ****************

// Imports
// *******
// Cloudinary
const cloudinary = require("../middleware/cloudinary");
// Mongoose schemas
const Person = require("../models/person");
const PartyPerson = require("../models/partyPerson");
// Unique id generator
const Id = require("../models/createId");

// Exports
// *******
module.exports = {
  // Serve index
  getIndex: (req, res) => {
    res.render("index.ejs");
  },

  // Serve party registration
  getParty: (req, res) => {
    res.render("party_signup.ejs");
  },

  // Create party record
  createPartyRecord: async (req, res) => {
    try {
      // Generate unique ID
      const tempId = Id.generateUniqueID(4);
      // Save to Cloudinary
      const result = await cloudinary.uploader.upload(req.file.path);
      console.log("Payment receipt saved to cloudinary");
      // Create record using mongoose schema
      const person = new PartyPerson({
        ...req.body,
        cloudinaryId: result.public_id,
        image: result.secure_url,
        access_id: tempId,
      });
      person.save().then((result) => {
        console.log(result);

        // Get qrcode url
        const myQrcode =
          "https://api.qrserver.com/v1/create-qr-code/?data=" +
          result.access_id.toString() +
          "&amp;size=200x200";

        // Render confirmation page
        res.render("party_confirmation.ejs", {
          // Include id variable and QR string
          idAlumno: result.access_id.toString(),
          qrWww: myQrcode,
          nombreAlumno: req.body.first_name + " " + req.body.last_name,
        });
      });
    } catch (err) {
      console.log(err);
    }
  },

  // Create class record
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
        res.render("party_confirmation.ejs", {
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
