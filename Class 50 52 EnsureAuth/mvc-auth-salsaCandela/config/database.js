// Import mongoose library
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // Connect to the MongoDB database using the mongoose.connect method
    // Uses environment variable with the credentials needed to connect to MongoDB
    const conn = await mongoose.connect(process.env.DB_STRING, {
      // Use a new URL parser
      useNewUrlParser: true,
      // Ensures that Mongoose uses the new Server Discovery and Monitoring engine
      useUnifiedTopology: true,
    });
    // Logs a confirmation message
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    // If an error occurs log the error message to the console
    console.error(err);
    // Exit Node.js process with an exit code of 1, indicating an error.
    process.exit(1);
  }
};
// Exports the connectDB function
module.exports = connectDB;
