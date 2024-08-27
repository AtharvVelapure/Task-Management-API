const express = require('express');
const router = express.Router();
const tasks = require('../models/Task.js');


// Create a new task
router.post('/tasks', async (req, res) => {
    try {
        const task = new Task(req.body); // Create a new Task instance
        await task.save(); // Save the task to the database
        res.status(201).json(task); // Respond with the created task
    } catch (error) {
        res.status(400).json({ error: error.message }); // Respond with error if creation fails
    }
});

// Get all tasks
router.get('/tasks', async (req, res) => {
    try {
        const tasks = await Task.find(); // Find all tasks in the database
        res.json(tasks); // Respond with all tasks
    } catch (error) {
        res.status(500).json({ error: error.message }); // Respond with error if retrieval fails
    }
});

// Update a task by ID
router.put('/tasks/:taskId', async (req, res) => {
    const { taskId } = req.params; // Extract taskId from request parameters
    try {
        const updatedTask = await Task.findByIdAndUpdate(taskId, req.body, { new: true }); // Find task by ID and update it
        if (!updatedTask) {
            return res.status(404).json({ message: 'Task not found' }); // Respond if task not found
        }
        res.json(updatedTask); // Respond with the updated task
    } catch (error) {
        res.status(400).json({ error: error.message }); // Respond with error if update fails
    }
});

// Delete a task by ID
router.delete('/tasks/:taskId', async (req, res) => {
    const { taskId } = req.params; // Extract taskId from request parameters
    try {
        const deletedTask = await Task.findByIdAndDelete(taskId); // Find task by ID and delete it
        if (!deletedTask) {
            return res.status(404).json({ message: 'Task not found' }); // Respond if task not found
        }
        res.json({ message: 'Task deleted' }); // Respond with success message
    } catch (error) {
        res.status(500).json({ error: error.message }); // Respond with error if deletion fails
    }
});

module.exports = router; // Export the router
