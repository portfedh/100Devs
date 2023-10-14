console.log("server.js starting...");

// =======
// Imports
// =======
require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectId;
const PORT = 3000;
const multer = require("multer");
const AWS = require("aws-sdk");
const s3 = new AWS.S3();

// Serve public folder
app.use(express.static(__dirname + "/public"));

// ======================
// Connecting to MongoDB:
// ======================
let connectionString =
  "mongodb+srv://salsaCandela:XKCMSd2zrCt1tkW6@cluster0.7sqj1aw.mongodb.net/?retryWrites=true&w=majority";
// let connectionString = process.env.DB_STRING;
let db;
let collection;

MongoClient.connect(connectionString, { useUnifiedTopology: true })
  .then((client) => {
    db = client.db("Fiesta29Sept23");
    collection = db.collection("ControlAcceso");
    console.log(`Connected to Database and collection`);
  })
  .catch((error) => console.error(error));

// ==========
// Middleware
// ==========
// Must come before CRUD handlers
// Set template engine EJS:
app.set("view engine", "ejs");
// Makes server able to Read JSON data:
app.use(bodyParser.json());
// So express can read data from html elements:
app.use(bodyParser.urlencoded({ extended: true }));
// Make public folder accessible to the public
app.use(express.static("public"));

// Set up Multer storage and file filter
// *************************************
// Store files in memory instead of the local filesystem
const storage = multer.memoryStorage();

const upload = multer({
  storage: storage,
  fileFilter: (req, file, callback) => {
    const allowedFileTypes = ["image/jpeg", "image/png", "application/pdf"];
    // Check if the uploaded file's MIME type is allowed
    if (allowedFileTypes.includes(file.mimetype)) {
      callback(null, true);
    } else {
      callback(new Error("Invalid file type."), false);
    }
  },
});

// =======
// Routes:
// =======

// Index:
// ======
app.get("/", (req, res) => {
  res.render("index.ejs", {});
});

// download:
// ======
app.get("/download", (req, res) => {
  res.render("download.ejs", {});
});

// Search:
// =======
app.get("/search", (req, res) => {
  res.render("search.ejs", {});
});

// Report:
// =======
app.get("/report", (req, res) => {
  // Gets quotes from database
  collection
    .find()
    .toArray()
    .then((results) => {
      console.log(results);
      // Render page with EJS and database results
      res.render("report.ejs", { quotes: results });
    })
    .catch((error) => console.error(error));
});

// Add user
// ========
app.post("/inscribir", upload.single("receipt"), async (req, res) => {
  try {
    const imageBuffer = req.file.buffer; // Get the uploaded image data from memory
    const contentType = req.file.mimetype; // Get the content type of the uploaded image
    // Specify the S3 bucket and key where you want to upload the image
    const bucketName = "cyclic-lazy-blue-springbok-wig-us-east-1";
    const key = `uploads/${req.file.originalname}`; // Adjust the key as needed
    // Upload the image to S3
    await s3
      .putObject({
        Body: imageBuffer,
        Bucket: bucketName,
        Key: key,
        ContentType: contentType,
      })
      .promise();
    // Delete the temporary file from memory
    req.file = undefined;
    // Insert record into the MongoDB database
    const result = await collection.insertOne(req.body);
    // Render confirmation page with variables
    res.render("confirmation.ejs", {
      idAlumno: result.insertedId.toString(),
      qrWww:
        "https://api.qrserver.com/v1/create-qr-code/?data=" +
        result.insertedId.toString() +
        "&amp;size=200x200",
      nombreAlumno: req.body.first_name + " " + req.body.last_name,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error uploading image");
  }
});

// Search for user:
// ================
app.post("/search_results", async (req, res) => {
  try {
    // Get id from body POST request
    var myId = req.body.id_to_search;
    // Search for id
    var object_id_to_find = new ObjectId(myId);
    const students2 = await collection.findOne({
      _id: object_id_to_find,
    });
    if (!students2) {
      // Case: No record found
      console.log("No student record found.");
      res.render("search_not_found.ejs", {});
    } else {
      // Case: Record found
      // Get last login date
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
        // Case: It's first access of the day: Access granted
        var accessButton = "welcome";
        var accessText = "Bienvenido";
        // Update access date:
        collection.findOneAndUpdate(
          // Search by id
          { _id: object_id_to_find },
          {
            // Update last_loggin variable to current date
            $set: { last_loggin: todayDateString },
          },
          { upsert: true }
        );
      } else {
        // Case: Previous access that day: Access denied
        var accessButton = "alreadyIn";
        var accessText = "Segundo acceso del dia";
      }
      // Render page with student data:
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

// ===============
// Listening Port:
// ===============
app.listen(process.env.PORT || PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
