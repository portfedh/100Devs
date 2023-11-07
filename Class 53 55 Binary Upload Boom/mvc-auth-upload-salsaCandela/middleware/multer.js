// Muttler configuration
// *********************

// Import the "multer" library for handling file uploads
const multer = require("multer");
// Import module for working with file and directory paths
const path = require("path");

// Exports an object
module.exports = multer({
  // "multer.diskStorage" function defines how files should be stored on the server's disk
  // using default configuration
  storage: multer.diskStorage({}),
  fileFilter: (req, file, cb) => {
    // Extract file extension from the uploaded file
    let ext = path.extname(file.originalname);
    // If file extension is not an accepted type throw error
    if (ext !== ".jpg" && ext !== ".jpeg" && ext !== ".png") {
      cb(new Error("File type is not supported"), false);
      return;
    }
    // If the file extension is accepted
    // Call "cb" callback with no error ("null") and "true"
    cb(null, true);
  },
});
