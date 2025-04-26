const School = require('../models/schoolModel');

// Controller for handling school-related API requests
const schoolController = {
  // Add a new school
  addSchool: async (req, res) => {
    try {
      const { name, address, latitude, longitude } = req.body;
      
      // Validate inputs
      if (!name || !address || !latitude || !longitude) {
        return res.status(400).json({ 
          success: false, 
          message: 'All fields are required: name, address, latitude, longitude' 
        });
      }
      
      // Validate latitude and longitude
      const lat = parseFloat(latitude);
      const lon = parseFloat(longitude);
      
      if (isNaN(lat) || isNaN(lon)) {
        return res.status(400).json({ 
          success: false, 
          message: 'Latitude and longitude must be valid numbers' 
        });
      }
      
      if (lat < -90 || lat > 90 || lon < -180 || lon > 180) {
        return res.status(400).json({ 
          success: false, 
          message: 'Latitude must be between -90 and 90, longitude must be between -180 and 180' 
        });
      }
      
      // Add school to database
      const schoolId = await School.addSchool(name, address, lat, lon);
      
      res.status(201).json({
        success: true,
        message: 'School added successfully',
        data: { id: schoolId, name, address, latitude: lat, longitude: lon }
      });
    } catch (error) {
      console.error('Error adding school:', error);
      res.status(500).json({ 
        success: false, 
        message: 'Failed to add school', 
        error: error.message 
      });
    }
  },
  
  // List schools sorted by proximity to user location
  listSchools: async (req, res) => {
    try {
      const { latitude, longitude } = req.query;
      
      // Validate inputs
      if (!latitude || !longitude) {
        return res.status(400).json({ 
          success: false, 
          message: 'Both latitude and longitude are required' 
        });
      }
      
      // Validate latitude and longitude
      const userLat = parseFloat(latitude);
      const userLon = parseFloat(longitude);
      
      if (isNaN(userLat) || isNaN(userLon)) {
        return res.status(400).json({ 
          success: false, 
          message: 'Latitude and longitude must be valid numbers' 
        });
      }
      
      if (userLat < -90 || userLat > 90 || userLon < -180 || userLon > 180) {
        return res.status(400).json({ 
          success: false, 
          message: 'Latitude must be between -90 and 90, longitude must be between -180 and 180' 
        });
      }
      
      // Get schools sorted by proximity
      const schools = await School.getSchoolsByProximity(userLat, userLon);
      
      res.status(200).json({
        success: true,
        count: schools.length,
        data: schools
      });
    } catch (error) {
      console.error('Error listing schools:', error);
      res.status(500).json({ 
        success: false, 
        message: 'Failed to list schools', 
        error: error.message 
      });
    }
  }
};

module.exports = schoolController; 