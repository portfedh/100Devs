console.log("server.js starting...");

// *************
// ** Imports **
// *************
require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectId;
const PORT = 3000;

// Serve public folder
app.use(express.static(__dirname + "/public"));

// Connecting to MongoDB:
// ======================
let connectionString = process.env.DB_STRING;

MongoClient.connect(connectionString, { useUnifiedTopology: true })
  .then((client) => {
    // ========================
    // Database and table info:
    // ========================
    console.log("Connected to Database");
    const db = client.db("SalsaCandela");
    const quotesCollection = db.collection("Fiesta1");

    // ============================================
    // Middleware (must come before crud handlers)
    // ============================================
    // Set template engine EJS
    app.set("view engine", "ejs");
    // Makes server able to Read JSON data
    app.use(bodyParser.json());
    // So express can read data from html elements
    app.use(bodyParser.urlencoded({ extended: true }));
    // Make public folder accessible to the public
    app.use(express.static("public"));

    // =======
    // Routes:
    // =======

    // Index:
    // ======
    app.get("/", (req, res) => {
      res.render("index.ejs", {});
    });

    // Search:
    // =======
    app.get("/search", (req, res) => {
      res.render("search.ejs", {});
    });

    // Search:
    // =======
    app.get("/report", (req, res) => {
      // Gets quotes from database
      quotesCollection
        .find()
        .toArray()
        .then((results) => {
          console.log(results);
          // Rendered page with EJS and database results
          res.render("report.ejs", { quotes: results });
          // res.sendFile(__dirname + "/report.html");
        })
        // Error handling
        .catch((error) => console.error(error));
    });

    // Add a user
    // ===========
    app.post("/inscribir", (req, res) => {
      // Insert record into database
      quotesCollection
        .insertOne(req.body)
        .then((result) => {
          // Log what was inserted to server console
          console.log(result);
          //Render confirmation page with Id
          res.render("confirmation.ejs", {
            idAlumno: result.insertedId.toString(),
            qrWww:
              "https://api.qrserver.com/v1/create-qr-code/?data=" +
              result.insertedId.toString() +
              "&amp;size=200x200",
            nombreAlumno: req.body.first_name + " " + req.body.last_name,
          });
        })
        // Error handling
        .catch((error) => console.error(error));
    });

    // Search for user:
    // ================
    app.post("/search_results", async (req, res) => {
      // const students = await quotesCollection.find().toArray();
      try {
        // Get id from body request
        var myId = req.body.id_to_search;
        // Search for id
        var object_id_to_find = new ObjectId(myId);
        const students2 = await quotesCollection.findOne({
          _id: object_id_to_find,
        });
        if (!students2) {
          // No record found:
          console.log("No student record found.");
          res.render("search_not_found.ejs", {});
        } else {
          // Record found:
          // Get las date
          console.log("last login:");
          console.log(students2.last_loggin);
          // Get date today
          const today = new Date();
          const year = today.getFullYear();
          const month = String(today.getMonth() + 1).padStart(2, "0"); // Adding 1 to month because months are zero-indexed
          const day = String(today.getDate()).padStart(2, "0");
          var todayDateString = `${year}-${month}-${day}`;
          console.log("Todays date:");
          console.log(todayDateString);
          // Compare dates
          if (students2.last_loggin != todayDateString) {
            // Access granted
            var accessButton = "welcome";
            var accessText = "Bienvenido";

            quotesCollection.findOneAndUpdate(
              // Search by id
              { _id: object_id_to_find },
              {
                // Update operator $set
                $set: { last_loggin: todayDateString },
              },
              { upsert: true }
            );
          } else {
            // Access rejected
            var accessButton = "alreadyIn";
            var accessText = "Segundo acceso del dia";
          }

          res.render("search_results.ejs", {
            idAlumno: students2._id,
            firstName: students2.first_name,
            lastName: students2.last_name,
            curso: students2.curso,
            sucursal: students2.sucursal,
            horario: students2.horario,
            last_loggin: students2.last_loggin,
            buttonClass: accessButton,
            text: accessText,
          });
        }
      } catch (error) {
        console.error("Error while querying MongoDB:", error);
        res.status(500).json({ message: "An error occurred." });
      }
    });

    // ========================
    // Server Port:
    // ========================
    app.listen(process.env.PORT || PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  // Error handling
  .catch((error) => console.error(error));
