// Import express library
const express = require("express");
// Create an instance of the Express Valuation
const app = express();
// Import the 'MongoClient' class from the 'mongodb' library.
const MongoClient = require("mongodb").MongoClient;
// Define the port number to listen on.
const PORT = 2121;

// Import and configure the 'dotenv' library to load environment variables from a '.env' file.
require("dotenv").config();

// Declare variables for the database connection and related information.
let db,
  // Get the database connection string from environment variables.
  dbConnectionStr = process.env.DB_STRING,
  // Set the name of the database to access.
  dbName = "todo";

// Connect to the MongoDB database using the 'MongoClient' using connection options.
MongoClient.connect(dbConnectionStr, { useUnifiedTopology: true }).then(
  (client) => {
    console.log(`Connected to ${dbName} Database`);
    // Assign the connected database to the 'db' variable.
    db = client.db(dbName);
  }
);
// Configure the Express application settings
// ==========================================
// Set the view engine to 'ejs'.
app.set("view engine", "ejs");
// Serve static files from the 'public' directory.
app.use(express.static("public"));
// So server can read data from html elements:
app.use(express.urlencoded({ extended: true }));
// So sever can read JSON data.
app.use(express.json());

// Define a route for the root URL ('/') that handles GET requests.
app.get("/", async (request, response) => {
  // Retrieve all todo items from the database and convert them to an array.
  const todoItems = await db.collection("todos").find().toArray();
  // Count the number of uncompleted todo items in the database.
  const itemsLeft = await db
    .collection("todos")
    .countDocuments({ completed: false });
  // Render the 'index.ejs' template with data and send it as a response.
  response.render("index.ejs", { items: todoItems, left: itemsLeft });

  // db.collection('todos').find().toArray()
  // .then(data => {
  //     db.collection('todos').countDocuments({completed: false})
  //     .then(itemsLeft => {
  //         response.render('index.ejs', { items: data, left: itemsLeft })
  //     })
  // })
  // .catch(error => console.error(error))
});

// Create a new todo item using a POST request.
app.post("/addTodo", (request, response) => {
  // Insert a new todo item into the database with the provided data.
  db.collection("todos")
    .insertOne({ thing: request.body.todoItem, completed: false })
    .then((result) => {
      // Log a message when the todo item is successfully added.
      console.log("Todo Added");
      // Redirect back to the root URL.
      response.redirect("/");
    })
    // Log an error if the insertion fails.
    .catch((error) => console.error(error));
});

// Define a route for marking a todo item as complete using a PUT request.
app.put("/markComplete", (request, response) => {
  // Update the 'completed' field of a todo item to 'true'.
  db.collection("todos")
    .updateOne(
      { thing: request.body.itemFromJS },
      {
        $set: {
          completed: true,
        },
      },
      {
        sort: { _id: -1 },
        upsert: false,
      }
    )
    .then((result) => {
      // Log a message when a todo item is marked as complete.
      console.log("Marked Complete");
      // Send a JSON response.
      response.json("Marked Complete");
    })
    // Log an error if update fails.
    .catch((error) => console.error(error));
});

// Define a route for marking a todo item as uncomplete using a PUT request.
app.put("/markUnComplete", (request, response) => {
  // Update the 'completed' field of a todo item to 'false'.
  db.collection("todos")
    .updateOne(
      { thing: request.body.itemFromJS },
      {
        $set: {
          completed: false,
        },
      },
      {
        sort: { _id: -1 },
        upsert: false,
      }
    )
    .then((result) => {
      // Log a message when a todo item is marked as complete.
      console.log("Marked Complete");
      // Send a JSON response.
      response.json("Marked Complete");
    })
    // Log an error if update fails.
    .catch((error) => console.error(error));
});

// Define a route for deleting a todo item using a DELETE request.
app.delete("/deleteItem", (request, response) => {
  // Delete a todo item from the database based on the provided data.
  db.collection("todos")
    .deleteOne({ thing: request.body.itemFromJS })
    .then((result) => {
      // Log a message when a todo item is marked as complete.
      console.log("Todo Deleted");
      // Send a JSON response.
      response.json("Todo Deleted");
    })
    // Log an error if update fails.
    .catch((error) => console.error(error));
});

// Start the Express application, listening on the specified port or a default one.
app.listen(process.env.PORT || PORT, () => {
  // Log a message when the server starts.
  console.log(`Server running on port ${PORT}`);
});
