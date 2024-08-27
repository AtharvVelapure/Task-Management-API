const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server is running on
         http://localhost:${PORT}`);
});

const authRoutes = require('./routes/auth');

app.use('/api', authRoutes);

const taskRoutes = require('./routes/tasks');

app.use('/api', taskRoutes);
