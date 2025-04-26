const { pool } = require('../config/db');

class School {
  // Add a new school to the database
  static async addSchool(name, address, latitude, longitude) {
    try {
      const [result] = await pool.query(
        'INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)',
        [name, address, latitude, longitude]
      );
      return result.insertId;
    } catch (error) {
      throw new Error(`Failed to add school: ${error.message}`);
    }
  }

  // Get all schools
  static async getAllSchools() {
    try {
      const [rows] = await pool.query('SELECT * FROM schools');
      return rows;
    } catch (error) {
      throw new Error(`Failed to get schools: ${error.message}`);
    }
  }

  // Calculate distance between two coordinate points using Haversine formula
  static calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Radius of the Earth in km
    const dLat = this.toRad(lat2 - lat1);
    const dLon = this.toRad(lon2 - lon1);
    const a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(this.toRad(lat1)) * Math.cos(this.toRad(lat2)) * 
      Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    const distance = R * c; // Distance in km
    return distance;
  }

  // Convert degrees to radians
  static toRad(value) {
    return value * Math.PI / 180;
  }

  // Get schools sorted by proximity to a location
  static async getSchoolsByProximity(userLat, userLon) {
    try {
      const schools = await this.getAllSchools();
      
      // Calculate distance for each school
      const schoolsWithDistance = schools.map(school => {
        const distance = this.calculateDistance(
          userLat, 
          userLon, 
          school.latitude, 
          school.longitude
        );
        return { ...school, distance };
      });
      
      // Sort by distance
      return schoolsWithDistance.sort((a, b) => a.distance - b.distance);
    } catch (error) {
      throw new Error(`Failed to get schools by proximity: ${error.message}`);
    }
  }
}

module.exports = School; 