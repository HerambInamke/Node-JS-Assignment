import React, { useState } from 'react';
import axios from 'axios';

const AddSchool = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    latitude: '',
    longitude: ''
  });
  
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  
  const { name, address, latitude, longitude } = formData;
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    
    // Reset status messages when form is being edited
    if (success) setSuccess(false);
    if (error) setError(null);
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate inputs
    if (!name || !address || !latitude || !longitude) {
      setError('All fields are required');
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
      const res = await axios.post('http://localhost:5000/api/addSchool', formData);
      
      if (res.data.success) {
        setSuccess(true);
        // Reset form after successful submission
        setFormData({
          name: '',
          address: '',
          latitude: '',
          longitude: ''
        });
      } else {
        setError(res.data.message || 'Error adding school');
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
          setFormData({
            ...formData,
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
  
  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card shadow">
          <div className="card-header bg-primary text-white">
            <h2 className="mb-0">Add a New School</h2>
          </div>
          <div className="card-body">
            {success && (
              <div className="alert alert-success" role="alert">
                School added successfully!
              </div>
            )}
            
            {error && (
              <div className="alert alert-danger" role="alert">
                {error}
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">School Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={name}
                  onChange={handleChange}
                  placeholder="Enter school name"
                  required
                />
              </div>
              
              <div className="mb-3">
                <label htmlFor="address" className="form-label">Address</label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  name="address"
                  value={address}
                  onChange={handleChange}
                  placeholder="Enter school address"
                  required
                />
              </div>
              
              <div className="row mb-3">
                <div className="col-md-6">
                  <label htmlFor="latitude" className="form-label">Latitude</label>
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
                
                <div className="col-md-6">
                  <label htmlFor="longitude" className="form-label">Longitude</label>
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
              </div>
              
              <div className="mb-4">
                <button 
                  type="button" 
                  className="btn btn-secondary me-2"
                  onClick={getCurrentLocation}
                  disabled={loading}
                >
                  Get Current Location
                </button>
              </div>
              
              <button 
                type="submit" 
                className="btn btn-primary"
                disabled={loading}
              >
                {loading ? 'Adding...' : 'Add School'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddSchool; 