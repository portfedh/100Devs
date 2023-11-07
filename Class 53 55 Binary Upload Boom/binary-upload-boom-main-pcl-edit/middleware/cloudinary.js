// Setup and configure the Cloudinary service

// Import v2 version of the Cloudinary library
const cloudinary = require("cloudinary").v2;

// Load environment variables
require("dotenv").config({ path: "./config/.env" });

// Set the configuration options for Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

// Export the cloudinary object
module.exports = cloudinary;
