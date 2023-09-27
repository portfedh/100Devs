// Environment variables
// =====================
const result = require("dotenv").config({ path: "./config/.env" });
if (result.error) {
  console.error("Error loading .env file:", result.error);
}

// Database
// ========
const connectDB = require("./config/database");
connectDB();

// Express
// =======
// Imports
const express = require("express");
const app = express();
// Set template engine EJS:
app.set("view engine", "ejs");
// Serve static files from the 'public' directory.
app.use(express.static("public"));
// Enable reading JSON data:
app.use(express.json());
// Enable reading from html elements:
app.use(express.urlencoded({ extended: true }));
// Enable access to public folder
app.use(express.static("public"));

// Routes:
// =======
// Imports
const homeRoutes = require("./routes/home");
const searchRoutes = require("./routes/search");
// const reportRoutes = require("./routes/report");

// Listening
app.use("/", homeRoutes);
app.use("/search", searchRoutes);
// app.use("/report", reportRoutes);

// Server Port
// ===========
app.listen(process.env.PORT || PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
