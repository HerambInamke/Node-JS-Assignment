import React, { useState } from 'react';
import axios from 'axios';

const ListSchools = () => {
  const [userLocation, setUserLocation] = useState({
    latitude: '',
    longitude: ''
  });
  
  const [schools, setSchools] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searched, setSearched] = useState(false);
  
  const { latitude, longitude } = userLocation;
  
  const handleChange = (e) => {
    setUserLocation({ ...userLocation, [e.target.name]: e.target.value });
    if (error) setError(null);
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate inputs
    if (!latitude || !longitude) {
      setError('Both latitude and longitude are required');
      return;
    }
    
    // Validate coordinates
    const lat = parseFloat(latitude);
    const lon = parseFloat(longitude);
    
    if (isNaN(lat) || isNaN(lon)) {
      setError('Latitude and longitude must be valid numbers');
      return;
    }
    
    if (lat < -90 || lat > 90) {
      setError('Latitude must be between -90 and 90');
      return;
    }
    
    if (lon < -180 || lon > 180) {
      setError('Longitude must be between -180 and 180');
      return;
    }
    
    setLoading(true);
    setError(null);
    
    try {
      const res = await axios.get(
        `http://localhost:5000/api/listSchools?latitude=${lat}&longitude=${lon}`
      );
      
      if (res.data.success) {
        setSchools(res.data.data);
        setSearched(true);
      } else {
        setError(res.data.message || 'Error fetching schools');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Error connecting to server');
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };
  
  // Function to get current location coordinates
  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      setLoading(true);
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            latitude: position.coords.latitude.toFixed(6),
            longitude: position.coords.longitude.toFixed(6)
          });
          setLoading(false);
        },
        (error) => {
          setError('Error getting location: ' + error.message);
          setLoading(false);
        }
      );
    } else {
      setError('Geolocation is not supported by this browser');
    }
  };
  
  // Format distance to be more readable
  const formatDistance = (distance) => {
    if (distance < 1) {
      return `${(distance * 1000).toFixed(0)} m`;
    }
    return `${distance.toFixed(2)} km`;
  };
  
  return (
    <div>
      <div className="card shadow mb-4">
        <div className="card-header bg-primary text-white">
          <h2 className="mb-0">Find Schools Near You</h2>
        </div>
        <div className="card-body">
          {error && (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          )}
          
          <form onSubmit={handleSubmit}>
            <div className="row align-items-end">
              <div className="col-md-4 mb-3">
                <label htmlFor="latitude" className="form-label">Your Latitude</label>
                <input
                  type="text"
                  className="form-control"
                  id="latitude"
                  name="latitude"
                  value={latitude}
                  onChange={handleChange}
                  placeholder="e.g., 12.345678"
                  required
                />
              </div>
              
              <div className="col-md-4 mb-3">
                <label htmlFor="longitude" className="form-label">Your Longitude</label>
                <input
                  type="text"
                  className="form-control"
                  id="longitude"
                  name="longitude"
                  value={longitude}
                  onChange={handleChange}
                  placeholder="e.g., 98.765432"
                  required
                />
              </div>
              
              <div className="col-md-4 mb-3">
                <button 
                  type="button" 
                  className="btn btn-secondary me-2"
                  onClick={getCurrentLocation}
                  disabled={loading}
                >
                  Get Current Location
                </button>
              </div>
            </div>
            
            <button 
              type="submit" 
              className="btn btn-primary"
              disabled={loading}
            >
              {loading ? 'Searching...' : 'Find Schools'}
            </button>
          </form>
        </div>
      </div>
      
      {searched && (
        <div className="card shadow">
          <div className="card-header bg-light">
            <h3 className="mb-0">
              {schools.length > 0 
                ? `Schools (${schools.length} found)` 
                : 'No schools found'}
            </h3>
          </div>
          {schools.length > 0 && (
            <div className="table-responsive">
              <table className="table table-hover mb-0">
                <thead className="table-light">
                  <tr>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Distance</th>
                    <th>Coordinates</th>
                  </tr>
                </thead>
                <tbody>
                  {schools.map((school) => (
                    <tr key={school.id}>
                      <td>{school.name}</td>
                      <td>{school.address}</td>
                      <td>{formatDistance(school.distance)}</td>
                      <td>
                        {school.latitude.toFixed(6)}, {school.longitude.toFixed(6)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ListSchools; 