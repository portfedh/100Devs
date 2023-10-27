// Import mongoose library
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // Connect to mongoose using connection string in env variables
    const conn = await mongoose.connect(process.env.DB_STRING, {
      // Connection options
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
    // Handle errors
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

module.exports = connectDB;
