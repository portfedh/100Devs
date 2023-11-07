// Imports
const express = require("express");
const router = express.Router();
const todosController = require("../controllers/todos");
const { ensureAuth } = require("../middleware/auth");

//  Todo routes
router.get("/", ensureAuth, todosController.getTodos);
router.post("/createTodo", todosController.createTodo);
router.put("/markComplete", todosController.markComplete);
router.put("/markIncomplete", todosController.markIncomplete);
router.delete("/deleteTodo", todosController.deleteTodo);

// Timer routes
router.put("/startTimer", todosController.startTimer);
router.put("/stopTimer", todosController.stopTimer);
router.put("/resetTimer", todosController.resetTimer);
router.get("/getTimer/:todoId", todosController.getTimer);

module.exports = router;
