// const Task = []; // This will store our tasks
// module.exports = Task;


// Task.js

const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  name: String,
  completed: Boolean,
});

module.exports = mongoose.model('Task', taskSchema);
