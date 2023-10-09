// Import express
const express = require("express");

// Create an express router
// Used to define a set of routes for handling HTTP requests
const router = express.Router();

// Get the controller logic for the ToDo's page
const todosController = require("../controllers/todos");

//Import ensure authorization function
// ***********************************
// Imports specific function from module
// So it can be called directly as: ensureAuth
// Instead of: 'middleware.auth.ensureAuth'
const { ensureAuth } = require("../middleware/auth");

// Includes ensureAuth parameter
// *****************************
// If GET request on .../todos/ is called:
// Run ensureAuth function.
// If it returns true
// Call getTodos method
router.get("/", ensureAuth, todosController.getTodos);

// If POST route on .../todos/createTodo is called, call createTodo method
router.post("/createTodo", todosController.createTodo);

// If PUT route on .../todos/markComplete is called, call markComplete method
router.put("/markComplete", todosController.markComplete);

// If PUT route on .../todos/markIncomplete is called, call markIncomplete method
router.put("/markIncomplete", todosController.markIncomplete);

// If DELETE route on .../todos/deleteTodo is called, call deleteTodo method
router.delete("/deleteTodo", todosController.deleteTodo);

// Export the router object so other scripts can import it
module.exports = router;
