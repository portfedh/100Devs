// Import mongoose
const mongoose = require("mongoose");

// Create person schema
const PartySchema = new mongoose.Schema({
  access_id: {
    type: String,
    required: true,
  },
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  cel: {
    type: String,
    required: true,
  },
  cloudinaryId: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    require: true,
  },
  accessed: {
    type: Boolean,
    require: true,
  },
});

// Export person schema
module.exports = mongoose.model("PartyPerson", PartySchema);
