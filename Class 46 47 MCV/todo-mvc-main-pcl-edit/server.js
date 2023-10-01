// Import express
const express = require("express");
const app = express();

// Database URL and PORTs
const connectDB = require("./config/database");
// Get Home page routes
const homeRoutes = require("./routes/home");
// Get ToDo's page routes
const todoRoutes = require("./routes/todos");

// Get enviroment variables
require("dotenv").config({ path: "./config/.env" });

// Connect to the database
connectDB();

// Configure the Express settings
// ==============================
// Set the view engine to 'ejs'.
app.set("view engine", "ejs");
// Serve static files from the 'public' directory.
app.use(express.static("public"));
// So server can read data from html elements:
app.use(express.urlencoded({ extended: true }));
// So sever can read JSON data.
app.use(express.json());

// Listen to home routes
app.use("/", homeRoutes);
// Listen to ToDo's routes:
app.use("/todos", todoRoutes);

// Start the Express application, listening on the specified port.
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port: ${process.env.PORT}`);
});
