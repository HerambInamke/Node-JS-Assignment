import React, { useState } from 'react';
import axios from 'axios';

const AddSchool = () => {
  const [schoolData, setSchoolData] = useState({
    name: '',
    address: '',
    city: '',
    state: '',
    contact: '',
    image: '',
    email: '',
    description: ''
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSchoolData({ ...schoolData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ text: '', type: '' });

    try {
      const response = await axios.post('http://localhost:5000/api/schools', schoolData);
      setMessage({ 
        text: 'School added successfully!', 
        type: 'success' 
      });
      // Reset the form
      setSchoolData({
        name: '',
        address: '',
        city: '',
        state: '',
        contact: '',
        image: '',
        email: '',
        description: ''
      });
    } catch (error) {
      setMessage({ 
        text: error.response?.data?.message || 'Failed to add school', 
        type: 'danger' 
      });
    } finally {
      setLoading(false);
      // Scroll to top to show the message
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card shadow-sm border-0">
            <div className="card-body p-4 p-md-5">
              <div className="d-flex align-items-center mb-4">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="32" 
                  height="32" 
                  fill="currentColor" 
                  className="bi bi-building text-primary me-3" 
                  viewBox="0 0 16 16"
                >
                  <path d="M4 2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zM4 5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zM7.5 5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zM4.5 8a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z"/>
                  <path d="M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1zm11 0H3v14h3v-2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V15h3z"/>
                </svg>
                <h2 className="card-title fs-3 fw-bold mb-0">Add New School</h2>
              </div>
              
              {message.text && (
                <div className={`alert alert-${message.type} mb-4`} role="alert">
                  {message.text}
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="row g-4">
                  <div className="col-md-6">
                    <div className="form-group mb-3">
                      <label htmlFor="name" className="form-label fw-medium mb-2">School Name</label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        id="name"
                        name="name"
                        value={schoolData.name}
                        onChange={handleChange}
                        required
                        placeholder="Enter school name"
                      />
                    </div>
                  </div>
                  
                  <div className="col-md-6">
                    <div className="form-group mb-3">
                      <label htmlFor="email" className="form-label fw-medium mb-2">Email</label>
                      <input
                        type="email"
                        className="form-control form-control-lg"
                        id="email"
                        name="email"
                        value={schoolData.email}
                        onChange={handleChange}
                        required
                        placeholder="Enter email address"
                      />
                    </div>
                  </div>
                  
                  <div className="col-md-12">
                    <div className="form-group mb-3">
                      <label htmlFor="address" className="form-label fw-medium mb-2">Address</label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        id="address"
                        name="address"
                        value={schoolData.address}
                        onChange={handleChange}
                        required
                        placeholder="Enter complete address"
                      />
                    </div>
                  </div>
                  
                  <div className="col-md-6">
                    <div className="form-group mb-3">
                      <label htmlFor="city" className="form-label fw-medium mb-2">City</label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        id="city"
                        name="city"
                        value={schoolData.city}
                        onChange={handleChange}
                        required
                        placeholder="Enter city"
                      />
                    </div>
                  </div>
                  
                  <div className="col-md-6">
                    <div className="form-group mb-3">
                      <label htmlFor="state" className="form-label fw-medium mb-2">State</label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        id="state"
                        name="state"
                        value={schoolData.state}
                        onChange={handleChange}
                        required
                        placeholder="Enter state"
                      />
                    </div>
                  </div>
                  
                  <div className="col-md-6">
                    <div className="form-group mb-3">
                      <label htmlFor="contact" className="form-label fw-medium mb-2">Contact Number</label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        id="contact"
                        name="contact"
                        value={schoolData.contact}
                        onChange={handleChange}
                        required
                        placeholder="Enter contact number"
                      />
                    </div>
                  </div>
                  
                  <div className="col-md-6">
                    <div className="form-group mb-3">
                      <label htmlFor="image" className="form-label fw-medium mb-2">Image URL</label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        id="image"
                        name="image"
                        value={schoolData.image}
                        onChange={handleChange}
                        placeholder="Enter image URL (optional)"
                      />
                    </div>
                  </div>
                  
                  <div className="col-md-12">
                    <div className="form-group mb-4">
                      <label htmlFor="description" className="form-label fw-medium mb-2">Description</label>
                      <textarea
                        className="form-control form-control-lg"
                        id="description"
                        name="description"
                        value={schoolData.description}
                        onChange={handleChange}
                        rows="4"
                        placeholder="Enter school description"
                        required
                      ></textarea>
                    </div>
                  </div>
                  
                  <div className="col-12 d-grid">
                    <button 
                      type="submit" 
                      className="btn btn-primary btn-lg"
                      disabled={loading}
                    >
                      {loading ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                          Saving...
                        </>
                      ) : (
                        <>
                          <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            width="20" 
                            height="20" 
                            fill="currentColor" 
                            className="bi bi-plus-circle me-2" 
                            viewBox="0 0 16 16"
                          >
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                          </svg>
                          Add School
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddSchool; 