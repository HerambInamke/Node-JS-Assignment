const mysql = require('mysql2/promise');
const dotenv = require('dotenv');

dotenv.config();

// MySQL connection pool with retry logic
const createPool = () => {
  console.log('Attempting to connect to database...');
  return mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'school_management',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    connectTimeout: 30000, // 30 seconds timeout
  });
};

// Create the initial pool
let pool = createPool();

// Function to initialize the database with required tables
async function initDatabase() {
  let retries = 5;
  let connection;
  
  while (retries > 0) {
    try {
      console.log(`Connecting to database (${retries} attempts left)...`);
      // Get a connection from the pool
      connection = await pool.getConnection();
      
      // Test the connection
      await connection.query('SELECT 1');
      
      // Create schools table if it doesn't exist
      await connection.query(`
        CREATE TABLE IF NOT EXISTS schools (
          id INT AUTO_INCREMENT PRIMARY KEY,
          name VARCHAR(255) NOT NULL,
          address VARCHAR(255) NOT NULL,
          latitude FLOAT NOT NULL,
          longitude FLOAT NOT NULL,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
      `);
      
      console.log('Database connected and initialized successfully');
      connection.release();
      return;
    } catch (error) {
      console.error(`Database connection attempt failed: ${error.message}`);
      if (connection) connection.release();
      
      // Recreate pool on each retry
      pool = createPool();
      
      retries--;
      if (retries === 0) {
        console.error('Maximum connection retries reached. Database initialization failed.');
        throw error;
      }
      
      // Wait before retrying
      await new Promise(resolve => setTimeout(resolve, 5000));
    }
  }
}

module.exports = {
  pool,
  initDatabase
}; 