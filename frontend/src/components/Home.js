import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section py-5 mb-5">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold mb-4">Find the Perfect School in Your Area</h1>
              <p className="lead mb-4">
                Discover educational institutions based on location, programs, and more.
                Our platform helps you make informed decisions about your educational journey.
              </p>
              <div className="d-flex flex-wrap gap-3 mt-4">
                <Link to="/list-schools" className="btn btn-primary btn-lg px-4 py-3">
                  Find Schools
                </Link>
                <Link to="/add-school" className="btn btn-outline-primary btn-lg px-4 py-3">
                  Add a School
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hero-image-container">
                <img 
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                  alt="Students in a classroom"
                  className="img-fluid rounded-4 shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section py-5 mb-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">How It Works</h2>
            <p className="lead text-muted mx-auto" style={{ maxWidth: '700px' }}>
              Our platform makes it easy to find and contribute to the educational 
              community with just a few simple steps.
            </p>
          </div>
          
          <div className="row g-5">
            <div className="col-md-4">
              <div className="feature-card p-4 bg-white rounded-4 shadow-sm h-100">
                <div className="feature-icon-wrapper mb-4 d-flex align-items-center justify-content-center bg-primary bg-opacity-10 rounded-circle" 
                     style={{ width: '80px', height: '80px' }}>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="36" 
                    height="36" 
                    fill="var(--primary-color)" 
                    className="bi bi-search" 
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                  </svg>
                </div>
                <h3 className="h4 mb-3">Search</h3>
                <p className="text-muted mb-0">
                  Browse through our comprehensive database of schools using filters 
                  like location, programs offered, and more to find the perfect match for your needs.
                </p>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="feature-card p-4 bg-white rounded-4 shadow-sm h-100">
                <div className="feature-icon-wrapper mb-4 d-flex align-items-center justify-content-center bg-primary bg-opacity-10 rounded-circle" 
                     style={{ width: '80px', height: '80px' }}>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="36" 
                    height="36" 
                    fill="var(--primary-color)" 
                    className="bi bi-geo-alt" 
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                  </svg>
                </div>
                <h3 className="h4 mb-3">Locate</h3>
                <p className="text-muted mb-0">
                  View schools on an interactive map to understand their proximity to 
                  your location and make decisions based on convenience and accessibility.
                </p>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="feature-card p-4 bg-white rounded-4 shadow-sm h-100">
                <div className="feature-icon-wrapper mb-4 d-flex align-items-center justify-content-center bg-primary bg-opacity-10 rounded-circle" 
                     style={{ width: '80px', height: '80px' }}>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="36" 
                    height="36" 
                    fill="var(--primary-color)" 
                    className="bi bi-plus-circle" 
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
                  </svg>
                </div>
                <h3 className="h4 mb-3">Contribute</h3>
                <p className="text-muted mb-0">
                  Add new schools to our database, helping others discover educational 
                  opportunities and expanding our collective knowledge of institutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section py-5 mb-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="cta-card bg-primary text-white p-5 rounded-4 shadow position-relative overflow-hidden">
                <div className="row align-items-center">
                  <div className="col-lg-8 position-relative z-1">
                    <h2 className="display-6 fw-bold mb-3">Ready to Find Your Ideal School?</h2>
                    <p className="lead mb-4 opacity-90">
                      Start your search today and discover the perfect educational institution 
                      based on your preferences and requirements.
                    </p>
                    <Link to="/list-schools" className="btn btn-light btn-lg px-4 py-3">
                      Begin Searching Now
                    </Link>
                  </div>
                  <div className="col-lg-4 position-relative z-1 d-none d-lg-block">
                    <div className="cta-icon text-end">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="160" 
                        height="160" 
                        fill="rgba(255,255,255,0.2)" 
                        className="bi bi-mortarboard" 
                        viewBox="0 0 16 16"
                      >
                        <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5ZM8 8.46 1.758 5.965 8 3.052l6.242 2.913L8 8.46Z"/>
                        <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Zm-.068 1.873.22-.748 3.496 1.311a.5.5 0 0 0 .352 0l3.496-1.311.22.748L8 12.46l-3.892-1.556Z"/>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="background-decoration position-absolute" 
                     style={{ 
                       background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)',
                       width: '500px',
                       height: '500px',
                       borderRadius: '50%',
                       top: '-200px',
                       right: '-200px'
                     }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="testimonials-section py-5 mb-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">What Users Say</h2>
            <p className="lead text-muted mx-auto" style={{ maxWidth: '700px' }}>
              Hear from users who have successfully used our platform to find or add schools.
            </p>
          </div>
          
          <div className="row g-4">
            <div className="col-md-6 col-lg-4">
              <div className="testimonial-card p-4 bg-white rounded-4 shadow-sm h-100">
                <div className="d-flex align-items-center mb-4">
                  <div className="testimonial-avatar me-3">
                    <img 
                      src="https://randomuser.me/api/portraits/women/44.jpg" 
                      alt="Sarah Johnson" 
                      className="rounded-circle" 
                      width="60" 
                      height="60"
                    />
                  </div>
                  <div>
                    <h4 className="h5 mb-1">Sarah Johnson</h4>
                    <p className="text-muted mb-0">Parent</p>
                  </div>
                </div>
                <p className="mb-0 text-muted">
                  "SchoolFinder made it so easy to locate schools in our new neighborhood. 
                  The map feature was particularly helpful in understanding distances from our home."
                </p>
              </div>
            </div>
            
            <div className="col-md-6 col-lg-4">
              <div className="testimonial-card p-4 bg-white rounded-4 shadow-sm h-100">
                <div className="d-flex align-items-center mb-4">
                  <div className="testimonial-avatar me-3">
                    <img 
                      src="https://randomuser.me/api/portraits/men/32.jpg" 
                      alt="Michael Chen" 
                      className="rounded-circle" 
                      width="60" 
                      height="60"
                    />
                  </div>
                  <div>
                    <h4 className="h5 mb-1">Michael Chen</h4>
                    <p className="text-muted mb-0">School Administrator</p>
                  </div>
                </div>
                <p className="mb-0 text-muted">
                  "Adding our school to this platform has increased our visibility in the community. 
                  We've seen a noticeable increase in inquiries since listing our institution here."
                </p>
              </div>
            </div>
            
            <div className="col-md-6 col-lg-4">
              <div className="testimonial-card p-4 bg-white rounded-4 shadow-sm h-100">
                <div className="d-flex align-items-center mb-4">
                  <div className="testimonial-avatar me-3">
                    <img 
                      src="https://randomuser.me/api/portraits/women/68.jpg" 
                      alt="Aisha Patel" 
                      className="rounded-circle" 
                      width="60" 
                      height="60"
                    />
                  </div>
                  <div>
                    <h4 className="h5 mb-1">Aisha Patel</h4>
                    <p className="text-muted mb-0">Student</p>
                  </div>
                </div>
                <p className="mb-0 text-muted">
                  "When I was looking for specialized programs, this site helped me narrow down 
                  my options quickly. I found the perfect school with the exact curriculum I needed."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 