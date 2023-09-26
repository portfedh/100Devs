const mongoose = require("mongoose");

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
});

module.exports = mongoose.model("Todo", PersonSchema);
