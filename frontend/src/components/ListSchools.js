import React, { useState } from 'react';
import axios from 'axios';

// Base API URL - changes based on environment
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

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
        `${API_BASE_URL}/api/listSchools?latitude=${lat}&longitude=${lon}`
      );
      
      if (res.data.success) {
        setSchools(res.data.data);
        setSearched(true);
        
        // Scroll to results if on mobile
        if (window.innerWidth < 768) {
          const resultsElement = document.getElementById('results-section');
          if (resultsElement) {
            setTimeout(() => {
              resultsElement.scrollIntoView({ behavior: 'smooth' });
            }, 100);
          }
        }
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
    <div className="animate-fade-in">
      <div className="page-header">
        <h1>Find Nearby Schools</h1>
        <p className="lead">
          Discover educational institutions in your vicinity using our precise location-based search
        </p>
      </div>
      
      <div className="row g-4">
        <div className="col-lg-5 mb-4">
          <div className="card shadow">
            <div className="card-header">
              <h2 className="mb-0">Your Location</h2>
            </div>
            <div className="card-body">
              {error && (
                <div className="alert alert-danger d-flex align-items-center" role="alert">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="24" 
                    height="24" 
                    fill="currentColor" 
                    className="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" 
                    viewBox="0 0 16 16"
                  >
                    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                  </svg>
                  <div>{error}</div>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="py-3">
                <div className="mb-5">
                  <label htmlFor="latitude" className="form-label fs-5 mb-2">Your Latitude</label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="18" 
                        height="18" 
                        fill="currentColor" 
                        className="bi bi-globe" 
                        viewBox="0 0 16 16"
                      >
                        <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5zM4.09 4a9.3 9.3 0 0 1 .64-1.539 6.96 6.96 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.96 6.96 0 0 0-.656 2.5zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5zM8.5 5v2.5h2.99a12.5 12.5 0 0 0-.337-2.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12zm.182 2.472a6.96 6.96 0 0 1-.597-.933A9.33 9.33 0 0 1 4.09 12H2.255a7.02 7.02 0 0 0 3.072 2.472M3.82 11a13.7 13.7 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.96 6.96 0 0 1-.597.933M8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.6 13.6 0 0 1-.312 2.5m2.802-3.5a6.96 6.96 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.02 7.02 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.96 7.96 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4z"/>
                      </svg>
                    </span>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      id="latitude"
                      name="latitude"
                      value={latitude}
                      onChange={handleChange}
                      placeholder="e.g., 12.345678"
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-5">
                  <label htmlFor="longitude" className="form-label fs-5 mb-2">Your Longitude</label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="18" 
                        height="18" 
                        fill="currentColor" 
                        className="bi bi-globe-americas" 
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M2.04 4.326c.325 1.329 2.532 2.54 3.717 3.19.48.263.793.434.743.484-.08.08-.162.158-.242.234-.416.396-.787.749-.758 1.266.035.608.427.986.749 1.284.31.295.74.518 1.2.454.48-.064 1.68-.432 1.77-.51.09-.078-.45-.36-1-.152-.052.015-.116.03-.136-.005-.06-.105.27-.14.6-.277.16-.064.34-.138.52-.195.42-.142 1.366-.89 1.24-1.272-.15-.27-.23-.418-.34-.84-.07-.167-.038-.257.01-.35.02-.034.02-.107.3-.118z"/>
                        <path d="M3.01 11.5c0 .426.164.743.336.964.207.22.436.36.697.36.208 0 .47-.022.682-.112.23-.09.472-.338.512-.356.259-.117.507-.242.693-.408a4 4 0 0 0 .385-.469c.143-.234.24-.406.24-.568 0-.117-.058-.297-.17-.363-.75-.05-.258-.11-.31-.11-.157 0-.42.152-.488.21-.23.187-.322.493-.392.805a41 41 0 0 1-.19 0c.02-.16.055-.34.1-.51.075-.28.154-.63.172-.924.02-.344.055-.676.015-.908-.069-.236-.286-.25-.328-.25-.07 0-.25.054-.18.191.12.23.055.38-.085.934-.052.097-.128.154-.215.154s-.155-.044-.2-.054c-.076-.017-.098-.035-.22-.1-.122-.065-.26-.137-.397-.214-.32-.186-.607-.355-.917-.389a1.06 1.06 0 0 0-.323.06c-.063.018-.16.05-.176.078-.01.016.007.029.02.068.01.031.01.072.01.124 0 .124-.013.166.033.223.237.32.4.748.4 1.003z"/>
                      </svg>
                    </span>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      id="longitude"
                      name="longitude"
                      value={longitude}
                      onChange={handleChange}
                      placeholder="e.g., 98.765432"
                      required
                    />
                  </div>
                </div>
                
                <div className="d-grid mb-5">
                  <button 
                    type="button" 
                    className="btn btn-outline-secondary btn-lg py-3"
                    onClick={getCurrentLocation}
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Getting Location...
                      </>
                    ) : (
                      <>
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          width="18" 
                          height="18" 
                          fill="currentColor" 
                          className="bi bi-geo-alt me-3" 
                          viewBox="0 0 16 16"
                        >
                          <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
                          <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                        </svg>
                        Get Current Location
                      </>
                    )}
                  </button>
                </div>
                
                <div className="d-grid mt-4">
                  <button 
                    type="submit" 
                    className="btn btn-primary btn-lg py-3"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Searching...
                      </>
                    ) : (
                      <>
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          width="18" 
                          height="18" 
                          fill="currentColor" 
                          className="bi bi-search me-3" 
                          viewBox="0 0 16 16"
                        >
                          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                        </svg>
                        Find Schools
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        
        <div className="col-lg-7" id="results-section">
          {searched && (
            <div className="card shadow">
              <div className="card-header d-flex justify-content-between align-items-center">
                <h2 className="mb-0">
                  Results
                </h2>
                <span className="badge bg-primary rounded-pill px-3 py-2 fs-6">
                  {schools.length} {schools.length === 1 ? 'school' : 'schools'} found
                </span>
              </div>
              
              {schools.length > 0 ? (
                <div className="table-responsive">
                  <table className="table table-hover mb-0">
                    <thead>
                      <tr>
                        <th className="px-4 py-3">School Name</th>
                        <th className="px-4 py-3">Address</th>
                        <th className="px-4 py-3">Distance</th>
                        <th className="d-none d-md-table-cell px-4 py-3">Coordinates</th>
                      </tr>
                    </thead>
                    <tbody>
                      {schools.map((school) => (
                        <tr key={school.id}>
                          <td className="fw-medium px-4 py-3">{school.name}</td>
                          <td className="px-4 py-3">
                            <small className="d-block text-muted">{school.address}</small>
                          </td>
                          <td className="px-4 py-3">
                            <span className="badge bg-light text-dark border px-3 py-2">
                              {formatDistance(school.distance)}
                            </span>
                          </td>
                          <td className="d-none d-md-table-cell px-4 py-3">
                            <small className="d-block text-muted">
                              {school.latitude.toFixed(6)}, {school.longitude.toFixed(6)}
                            </small>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="card-body text-center py-5">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="64" 
                    height="64" 
                    fill="var(--text-muted)" 
                    className="bi bi-geo-alt mb-4" 
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                  </svg>
                  <h4 className="mb-3">No Schools Found</h4>
                  <p className="text-muted px-4">
                    There are no schools registered near your location. Try a different location or add schools to the database.
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListSchools; 