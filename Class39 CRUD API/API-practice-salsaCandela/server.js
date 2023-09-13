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
      res.sendFile(__dirname + "/index.html");
    });

    // Search:
    // =======
    app.get("/search", (req, res) => {
      res.sendFile(__dirname + "/search.html");
    });

    // WRITE: POST request form to add a user
    // ======================================
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

    // Read: Search for user in  MongoDB:
    // =================================
    app.post("/buscar", async (req, res) => {
      // For debugging: Search for all students
      // const students = await quotesCollection.find().toArray();

      // Search for record in database:
      // *******************************
      var myId = req.body.id_to_search;
      const object_id_to_find = new ObjectId(myId);

      const students2 = await quotesCollection.findOne({
        _id: object_id_to_find,
      });

      // console.log("Table with results below:");
      // console.log(students2);

      res.render("search.ejs", {
        idAlumno: students2._id,
        firstName: students2.first_name,
        lastName: students2.last_name,
        curso: students2.curso,
        sucursal: students2.sucursal,
        horario: students2.horario,
        last_loggin: students2.last_loggin,
      });
    });

    // UPDATE: Update MongoDB record
    // =============================
    // A less complicated process can be done with Mongoose.
    // Read tutorial here:
    // https://zellwk.com/blog/mongoose/
    // Responds to PUT request from public/main.js
    app.put("/quotes", (req, res) => {
      // Method included in MongoDB
      quotesCollection
        .findOneAndUpdate(
          // Query posts written by 'Yoda'
          { name: "Yoda" },
          {
            // Update operator $set
            // Other possible are: $inc, $push
            $set: {
              name: req.body.name,
              quote: req.body.quote,
            },
          },
          {
            // Create quote if no 'Yoda' quote exists
            // upsert: insert if no documents can be updated
            upsert: true,
          }
        )
        .then((result) => {
          // Console log result in server
          console.log(result);
          // Respond with Success JSON Message to client
          res.json("Success");
        })
        // Error Handling
        .catch((error) => console.error(error));
    });

    // DELETE: De-lay-te MongoDB record
    // ================================
    app.delete("/quotes", (req, res) => {
      quotesCollection
        .deleteOne({ name: req.body.name })
        //.deleteOne({ name: 'Darth Vader' }, options)
        .then((result) => {
          if (result.deletedCount === 0) {
            return res.json("No quote to delete");
          }
          res.json(`Deleted Darth Vader's quote`);
        })
        .catch((error) => console.error(error));
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
