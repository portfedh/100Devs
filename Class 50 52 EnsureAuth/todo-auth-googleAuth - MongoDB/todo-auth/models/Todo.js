
const mongoose = require('mongoose');

const TimerSchema = new mongoose.Schema({
  startTime: Date,
  endTime: Date,
  elapsedTime: Number, 
  resetTime: Date,
});

const TodoSchema = new mongoose.Schema({
  todo: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  timer: {
    type: TimerSchema, 
  },
});

// Define a pre-save hook to initialize timer fields
TodoSchema.pre('save', function(next) {
  if (!this.timer) {
    // If the timer field is not defined, create and initialize it
    this.timer = {
      startTime: null,    // You can set an initial start time if needed
      endTime: null,
      elapsedTime: 0,     // Initialize elapsedTime to 0
      resetTime: null,
    };
  }
  next();
});

module.exports = mongoose.model('Todo', TodoSchema);
