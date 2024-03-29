// Imports the Mongoose library and assigns it to a variable 'mongoose'
const mongoose = require("mongoose");

// Create a Mongoose schema
// Add two fields: "todo" and "completed"
const TodoSchema = new mongoose.Schema({
  // todo field should be of type String and is required
  todo: {
    type: String,
    required: true,
  },
  // completed field should be of type boolean and is required
  completed: {
    type: Boolean,
    required: true,
  },
});

// Export the function so other scripts can import it
// Creates a Mongoose model named "Todo" based on the "TodoSchema" schema
module.exports = mongoose.model("Todo", TodoSchema);
