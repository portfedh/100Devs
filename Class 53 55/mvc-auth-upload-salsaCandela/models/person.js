// Mongoose Class Person Schema
// ****************************

// Import mongoose
const mongoose = require("mongoose");

// Create schema
const PersonSchema = new mongoose.Schema({
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
  age: {
    type: Number,
    required: true,
  },
  sexo: {
    type: String,
    required: true,
  },
  curso: {
    type: String,
    required: true,
  },
  sucursal: {
    type: String,
    required: true,
  },
  horario: {
    type: String,
    required: true,
  },
  forma_pago: {
    type: String,
    required: true,
  },
  suscripcion: {
    type: String,
    required: true,
  },
  last_loggin: {
    type: String,
    required: true,
  },
  cloudinaryId: {
    type: String,
    required: true,
  },
});

// Export person schema
module.exports = mongoose.model("Person", PersonSchema);
