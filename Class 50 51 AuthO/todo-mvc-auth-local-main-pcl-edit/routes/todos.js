// Import express
const express = require("express");

// Create an express router
// Used to define a set of routes for handling HTTP requests
const router = express.Router();

// Get the controller logic for the ToDo's page
const todosController = require("../controllers/todos");

// New: Include Authorization
// **************************
const { ensureAuth } = require("../middleware/auth");

// If GET request on .../todos/ is called, call getTodos method
// Includes ensureAuth parameter
// *****************************
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
