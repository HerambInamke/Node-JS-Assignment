import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="text-center">
      <h1 className="mb-4">Welcome to School Management</h1>
      <p className="lead mb-5">
        This application allows you to add new schools and find schools sorted by proximity to your location.
      </p>

      <div className="row justify-content-center">
        <div className="col-md-5 mb-4">
          <div className="card h-100 shadow">
            <div className="card-body">
              <h3 className="card-title">Add a School</h3>
              <p className="card-text">
                Add a new school to the database by providing details like name, address, and coordinates.
              </p>
              <Link to="/add-school" className="btn btn-primary">
                Add School
              </Link>
            </div>
          </div>
        </div>
        
        <div className="col-md-5 mb-4">
          <div className="card h-100 shadow">
            <div className="card-body">
              <h3 className="card-title">Find Schools</h3>
              <p className="card-text">
                Find schools sorted by proximity to your location using your current coordinates.
              </p>
              <Link to="/list-schools" className="btn btn-primary">
                Find Schools
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; 