# School Management API System

A comprehensive MERN stack application for managing school data, allowing users to add new schools and retrieve a list of schools sorted by proximity to a specified location.

## Features

- **Add School**: Add new schools with name, address, latitude, and longitude
- **Find Schools**: List schools sorted by proximity to a specific location
- **Distance Calculation**: Calculate and sort schools based on distance from user coordinates
- **Responsive UI**: Modern, responsive user interface built with React and Bootstrap

## Project Structure

- `/backend` - Node.js/Express.js API with MySQL database
- `/frontend` - React.js frontend application

## Prerequisites

- Node.js (v14+)
- MySQL Server
- npm or yarn package manager

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd school-management
   ```

2. Install project dependencies:
   ```
   npm install
   ```
   This will install dependencies for both backend and frontend.

3. Configure your database:
   - Create a MySQL database named 'school_management'
   - Update `backend/.env` file with your database credentials

4. Initialize the database (creates required tables):
   ```
   npm run init:db
   ```

## Running the Application

### Development Mode

Run both backend and frontend concurrently:
```
npm run dev
```

- Backend will run on http://localhost:5000
- Frontend will run on http://localhost:3000

### Production Mode

Run the application in production mode:
```
npm start
```

## API Endpoints

### Add School
- **Endpoint**: `/api/addSchool`
- **Method**: POST
- **Payload**:
  ```json
  {
    "name": "School Name",
    "address": "School Address",
    "latitude": 12.345678,
    "longitude": 98.765432
  }
  ```
- **Response**:
  ```json
  {
    "success": true,
    "message": "School added successfully",
    "data": {
      "id": 1,
      "name": "School Name",
      "address": "School Address",
      "latitude": 12.345678,
      "longitude": 98.765432
    }
  }
  ```

### List Schools by Proximity
- **Endpoint**: `/api/listSchools?latitude=12.345678&longitude=98.765432`
- **Method**: GET
- **Parameters**:
  - `latitude`: User's latitude
  - `longitude`: User's longitude
- **Response**:
  ```json
  {
    "success": true,
    "count": 2,
    "data": [
      {
        "id": 1,
        "name": "School Name",
        "address": "School Address",
        "latitude": 12.345678,
        "longitude": 98.765432,
        "distance": 0.5
      },
      {
        "id": 2,
        "name": "Another School",
        "address": "Another Address",
        "latitude": 12.355678,
        "longitude": 98.775432,
        "distance": 2.3
      }
    ]
  }
  ```

## Testing with Postman

A Postman collection is included in the project root directory. To use it:

1. Open Postman
2. Import the collection file: `School_Management_API.postman_collection.json`
3. The collection contains request templates for both API endpoints

## Technologies Used

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MySQL** - Database
- **mysql2** - MySQL client for Node.js
- **dotenv** - Environment variables management

### Frontend
- **React.js** - UI library
- **Bootstrap** - CSS framework
- **Axios** - HTTP client
- **React Router** - Navigation management

## License

This project is licensed under the ISC License 