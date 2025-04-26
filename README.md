# School Management API System

Hey there! 👋  
This is a project I built — a full-fledged **School Management System** using the MERN stack. It's all about making it super easy to add new schools and then find them sorted by how close they are to a given location. I had a lot of fun putting it together, and I’m excited to share it with you!

## What it Can Do

- **Add Schools**: I made it simple to add new schools — just punch in the name, address, latitude, and longitude.
- **Find Nearby Schools**: Given your current location, it’ll list out schools ordered by how close they are.
- **Distance Sorting**: It smartly calculates distances between your location and the schools and sorts them for you.
- **Beautiful UI**: I crafted a clean, responsive interface using React + Bootstrap so it's nice on all devices.

## How I Organized Things

- `/backend` — Node.js and Express.js API with a MySQL database under the hood.
- `/frontend` — React app for the UI.

## What You’ll Need

- Node.js (v14 or higher)
- MySQL Server installed
- npm or yarn to manage packages

## How to Set It Up

1. First, clone my project:
   ```bash
   git clone <repository-url>
   cd school-management
   ```

2. Then, install all the dependencies:
   ```bash
   npm install
   ```
   (It'll handle installing both backend and frontend stuff.)

3. Set up your database:
   - Create a MySQL database called `school_management`.
   - Update your database credentials inside the `backend/.env` file.

4. Initialize the database (this creates the tables):
   ```bash
   npm run init:db
   ```

## How to Run It

### Development Mode

I usually run both backend and frontend together while developing:

```bash
npm run dev
```

- Backend: (not deployed )
- Frontend: https://node-js-assignment-fawn.vercel.app/

### Production Mode

If you want to run it in production:

```bash
npm start
```

## API Endpoints

Here’s a quick idea of the API routes I built:

### ➡️ Add a New School
- **Endpoint**: `/api/addSchool`
- **Method**: POST
- **Body**:
  ```json
  {
    "name": "School Name",
    "address": "School Address",
    "latitude": 12.345678,
    "longitude": 98.765432
  }
  ```

### ➡️ List Nearby Schools
- **Endpoint**: `/api/listSchools`
- **Method**: GET
- **Query Params**:
  - `latitude` (required)
  - `longitude` (required)

## Testing with Postman

I’ve also bundled a Postman collection (`School_Management_API.postman_collection.json`) so you can test everything quickly.

Steps:
1. Open Postman
2. Hit "Import"
3. Choose the JSON file
4. Boom — you’ll see all preconfigured requests ready to go!

## How to Deploy It

### Backend on Heroku

If you want to put the backend live on Heroku like I did:

1. Install the Heroku CLI and log in:
   ```bash
   heroku login
   ```

2. Create a new app:
   ```bash
   heroku create your-app-name
   ```

3. Add the MySQL database add-on:
   ```bash
   heroku addons:create jawsdb
   ```

4. Get your database connection string:
   ```bash
   heroku config:get JAWSDB_URL
   ```

5. Set some important environment variables:
   ```bash
   heroku config:set NODE_ENV=production
   ```

6. Push the backend code:
   ```bash
   git subtree push --prefix backend heroku main
   ```

### Frontend on Vercel

Deploying the frontend is super easy with Vercel:

1. Create a Vercel account.
2. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

3. Go inside the frontend folder:
   ```bash
   cd frontend
   ```

4. Update API URLs in frontend to point to your deployed backend.

5. Deploy:
   ```bash
   vercel
   ```
6. For production-ready deployment:
   ```bash
   vercel --prod
   ```

## What's Inside the Postman Collection

I spent a little extra time to make the Postman collection useful:
- Sample API requests
- Example payloads
- Environment variables for different setups (local, staging, production)
- Clear documentation of what responses you can expect

You can easily switch between environments by just setting a new `baseUrl` variable in Postman.

## Tech Stack I Used

### Backend
- **Node.js** — The engine behind everything
- **Express.js** — API routing and server stuff
- **MySQL** — My database of choice
- **mysql2** — MySQL client for Node
- **dotenv** — Managing environment configs

### Frontend
- **React.js** — For building the UI
- **Bootstrap** — To make it look good without much hassle
- **Axios** — Handling API calls smoothly
- **React Router** — For navigation across pages
