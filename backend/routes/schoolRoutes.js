const express = require('express');
const router = express.Router();
const schoolController = require('../controllers/schoolController');

// POST /api/addSchool - Add a new school
router.post('/addSchool', schoolController.addSchool);

// GET /api/listSchools - List schools sorted by proximity
router.get('/listSchools', schoolController.listSchools);

module.exports = router; 