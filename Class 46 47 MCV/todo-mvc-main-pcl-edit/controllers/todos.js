// Get ToDo's model logic
const Todo = require("../models/Todo");

// Export the functions so other scripts can import them
module.exports = {
  getTodos: async (req, res) => {
    try {
      // Retrieve all todo items
      const todoItems = await Todo.find();
      // Count the number of incomplete items
      const itemsLeft = await Todo.countDocuments({ completed: false });
      // Render a template called "todos.ejs" with the data
      res.render("todos.ejs", { todos: todoItems, left: itemsLeft });
    } catch (err) {
      // Log any errors
      console.log(err);
    }
  },
  createTodo: async (req, res) => {
    try {
      // Insert a new document into the database
      // Using todoItem text
      // And a "completed" status of false
      await Todo.create({ todo: req.body.todoItem, completed: false });
      console.log("Todo has been added!");
      // Then redirect user to the "/todos" route
      res.redirect("/todos");
    } catch (err) {
      // Log any errors
      console.log(err);
    }
  },
  markComplete: async (req, res) => {
    try {
      // Update a todo item in the database
      await Todo.findOneAndUpdate(
        // Search for the _id in the DB to match the provided _id
        { _id: req.body.todoIdFromJSFile },
        // Set the "completed" field to true
        { completed: true, }
      );
      // Respond with a JSON message and log "Marked Complete."
      console.log("Marked Complete");
      res.json("Marked Complete");
    } catch (err) {
      // Log any errors
      console.log(err);
    }
  },
  markIncomplete: async (req, res) => {
    try {
      // Update a todo item in the database
      await Todo.findOneAndUpdate(
        // Search for the _id in the DB to match the provided _id
        { _id: req.body.todoIdFromJSFile },
        // Set the "completed" field to false
        { completed: false, }
      );
      // Respond with a JSON message and log "Marked Complete."
      console.log("Marked Incomplete");
      res.json("Marked Incomplete");
    } catch (err) {
      // Log any errors
      console.log(err);
    }
  },
  deleteTodo: async (req, res) => {
    console.log(req.body.todoIdFromJSFile);
    try {
      // Delete a todo item in the database
      // Search for the _id in the DB to match the provided _id
      await Todo.findOneAndDelete({ _id: req.body.todoIdFromJSFile });
      // Respond with a JSON message and log "Marked Complete."
      console.log("Deleted Todo");
      res.json("Deleted It");
    } catch (err) {
      // Log any errors
      console.log(err);
    }
  },
};
