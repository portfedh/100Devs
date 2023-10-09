// Import mongoose library
const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    // Connect to the MongoDB database using the mongoose.connect method
    // Uses environment variable with the credentials needed to connect to MongoDB
    const conn = await mongoose.connect(process.env.DB_STRING, {
      // Use a new URL parser
      useNewUrlParser: true,
      // Ensures that Mongoose uses the new Server Discovery and Monitoring engine
      useUnifiedTopology: true,
      // Ensures that the findAndModify option is set to false, as it is deprecated
      useFindAndModify: false,
      // Create an index to quickly locate a field
      useCreateIndex: true
    })
    // Logs a confirmation message
    console.log(`MongoDB Connected: ${conn.connection.host}`)
  } catch (err) {
    console.error(err)
    // Exit Node.js process with an exit code of 1, indicating an error.
    process.exit(1)
  }
}
// Exports the connectDB function
module.exports = connectDB
