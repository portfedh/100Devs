const Todo = require("../models/Todo");

module.exports = {
  getTodos: async (req, res) => {
    console.log(req.user);
    try {
      const todoItems = await Todo.find({ userId: req.user.id });
      const itemsLeft = await Todo.countDocuments({
        userId: req.user.id,
        completed: false,
      });
      res.render("todos.ejs", {
        todos: todoItems,
        left: itemsLeft,
        user: req.user,
      });
    } catch (err) {
      console.log(err);
    }
  },
  createTodo: async (req, res) => {
    try {
      await Todo.create({
        todo: req.body.todoItem,
        completed: false,
        userId: req.user.id,
      });
      console.log("Todo has been added!");
      res.redirect("/todos");
    } catch (err) {
      console.log(err);
    }
  },

  markComplete: async (req, res) => {
    try {
      await Todo.findOneAndUpdate(
        { _id: req.body.todoIdFromJSFile },
        {
          completed: true,
        }
      );
      console.log("Marked Complete");
      res.json("Marked Complete");
    } catch (err) {
      console.log(err);
    }
  },
  markIncomplete: async (req, res) => {
    try {
      await Todo.findOneAndUpdate(
        { _id: req.body.todoIdFromJSFile },
        {
          completed: false,
        }
      );
      console.log("Marked Incomplete");
      res.json("Marked Incomplete");
    } catch (err) {
      console.log(err);
    }
  },
  deleteTodo: async (req, res) => {
    console.log(req.body.todoIdFromJSFile);
    try {
      await Todo.findOneAndDelete({ _id: req.body.todoIdFromJSFile });
      console.log("Deleted Todo");
      res.json("Deleted It");
    } catch (err) {
      console.log(err);
    }
  },

  //Timer Functionality

  // Start Timer
  startTimer: async (req, res) => {
    try {
      const todo = await Todo.findById(req.body.todoIdFromJSFile);

      if (!todo.timer) {
        // If timer doesn't exist, create it
        todo.timer = {
          startTime: new Date(),
          endTime: null,
          elapsedTime: 0,
          resetTime: null,
        };
      } else if (!todo.timer.startTime) {
        // If timer exists but wasn't running, resume it
        todo.timer.startTime = new Date();
      }

      await todo.save();

      console.log("Timer Started");
      res.json("Timer Started");
    } catch (err) {
      console.log(err);
    }
  },

  // Stop Timer
  stopTimer: async (req, res) => {
    try {
      const todo = await Todo.findById(req.body.todoIdFromJSFile);

      if (todo.timer && todo.timer.startTime) {
        // If the timer is running, calculate elapsed time
        const elapsed = (new Date() - todo.timer.startTime) / 1000;
        todo.timer.elapsedTime += elapsed;
        todo.timer.startTime = null;
        todo.timer.endTime = new Date();

        await todo.save();

        console.log("Timer Stopped");
        res.json("Timer Stopped");
      } else {
        console.log("Timer is not running.");
        res.json("Timer is not running.");
      }
    } catch (err) {
      console.log(err);
    }
  },

  // Reset Timer
  resetTimer: async (req, res) => {
    try {
      const todo = await Todo.findById(req.body.todoIdFromJSFile);

      if (todo.timer) {
        todo.timer.startTime = null;
        todo.timer.endTime = null;
        todo.timer.elapsedTime = 0;
        todo.timer.resetTime = new Date();

        await todo.save();

        console.log("Timer Reset");
        res.json("Timer Reset");
      } else {
        console.log("Timer data not found.");
        res.json("Timer data not found.");
      }
    } catch (err) {
      console.log(err);
    }
  },

  getTimer: async (req, res) => {
    try {
      const todoId = req.params.todoId;
      const todo = await Todo.findById(todoId);

      if (todo && todo.timer) {
        res.json({ elapsedTime: todo.timer.elapsedTime });
      } else {
        console.log("Timer data not found.");
        res.status(404).json("Timer data not found.");
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
};
