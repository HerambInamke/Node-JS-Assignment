const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');

// Import routes and database
const schoolRoutes = require('./routes/schoolRoutes');
const { initDatabase } = require('./config/db');

// Load env variables
dotenv.config();

// Initialize express app
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Use routes
app.use('/api', schoolRoutes);

// Default route
app.get('/', (req, res) => {
  res.send('School Management API is running');
});

// Set port
const PORT = process.env.PORT || 5000;

// Start server without requiring database to be connected first
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  
  // Initialize database after server is started
  initDatabase()
    .then(() => {
      console.log('Database initialized successfully');
    })
    .catch(error => {
      console.error('Failed to initialize database:', error);
      // Don't exit process, let the server continue running
    });
}); 