import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-light py-5 mt-auto border-top">
      <div className="container">
        <div className="row g-5 justify-content-between">
          <div className="col-md-5 col-lg-4 mb-4 mb-md-0">
            <div className="d-flex align-items-center mb-4">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="28" 
                height="28" 
                fill="var(--primary-color)" 
                className="bi bi-mortarboard me-3" 
                viewBox="0 0 16 16"
              >
                <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5ZM8 8.46 1.758 5.965 8 3.052l6.242 2.913L8 8.46Z"/>
                <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Zm-.068 1.873.22-.748 3.496 1.311a.5.5 0 0 0 .352 0l3.496-1.311.22.748L8 12.46l-3.892-1.556Z"/>
              </svg>
              <h3 className="fs-4 fw-bold text-dark mb-0">SchoolFinder</h3>
            </div>
            <p className="text-muted mb-4 lh-lg">
              A professional platform to efficiently manage and locate educational 
              institutions based on geographic proximity and other criteria.
            </p>
            <div className="d-flex gap-3">
              <a href="https://twitter.com" className="text-muted fs-5" aria-label="Twitter">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="22" 
                  height="22" 
                  fill="currentColor" 
                  className="bi bi-twitter-x" 
                  viewBox="0 0 16 16"
                >
                  <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z"/>
                </svg>
              </a>
              <a href="https://facebook.com" className="text-muted fs-5" aria-label="Facebook">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="22" 
                  height="22" 
                  fill="currentColor" 
                  className="bi bi-facebook" 
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
                </svg>
              </a>
              <a href="https://instagram.com" className="text-muted fs-5" aria-label="Instagram">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="22" 
                  height="22" 
                  fill="currentColor" 
                  className="bi bi-instagram" 
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                </svg>
              </a>
              <a href="https://linkedin.com" className="text-muted fs-5" aria-label="LinkedIn">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="22" 
                  height="22" 
                  fill="currentColor" 
                  className="bi bi-linkedin" 
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401m-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="col-sm-6 col-md-3 col-lg-2 mb-4 mb-md-0">
            <h4 className="fs-5 fw-bold mb-4">Navigation</h4>
            <ul className="list-unstyled">
              <li className="mb-3">
                <Link to="/" className="text-decoration-none text-muted">Home</Link>
              </li>
              <li className="mb-3">
                <Link to="/add-school" className="text-decoration-none text-muted">Add School</Link>
              </li>
              <li className="mb-3">
                <Link to="/list-schools" className="text-decoration-none text-muted">Find Schools</Link>
              </li>
            </ul>
          </div>
          
          <div className="col-sm-6 col-md-3 col-lg-2 mb-4 mb-md-0">
            <h4 className="fs-5 fw-bold mb-4">Resources</h4>
            <ul className="list-unstyled">
              <li className="mb-3">
                <a href="#" className="text-decoration-none text-muted">FAQ</a>
              </li>
              <li className="mb-3">
                <a href="#" className="text-decoration-none text-muted">Help Center</a>
              </li>
              <li className="mb-3">
                <a href="#" className="text-decoration-none text-muted">Privacy Policy</a>
              </li>
              <li className="mb-3">
                <a href="#" className="text-decoration-none text-muted">Terms of Service</a>
              </li>
            </ul>
          </div>
          
          <div className="col-md-6 col-lg-3">
            <h4 className="fs-5 fw-bold mb-4">Contact Us</h4>
            <ul className="list-unstyled">
              <li className="d-flex mb-3">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="18" 
                  height="18" 
                  fill="var(--primary-color)" 
                  className="bi bi-geo-alt me-3 flex-shrink-0 mt-1" 
                  viewBox="0 0 16 16"
                >
                  <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
                  <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                </svg>
                <span className="text-muted">
                  123 Education Avenue<br />
                  Learning District, ED 54321
                </span>
              </li>
              <li className="d-flex mb-3">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="18" 
                  height="18" 
                  fill="var(--primary-color)" 
                  className="bi bi-telephone me-3 flex-shrink-0 mt-1" 
                  viewBox="0 0 16 16"
                >
                  <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                </svg>
                <span className="text-muted">(123) 456-7890</span>
              </li>
              <li className="d-flex mb-3">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="18" 
                  height="18" 
                  fill="var(--primary-color)" 
                  className="bi bi-envelope me-3 flex-shrink-0 mt-1" 
                  viewBox="0 0 16 16"
                >
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
                </svg>
                <span className="text-muted">contact@schoolfinder.com</span>
              </li>
              <li className="d-flex">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="18" 
                  height="18"
                  fill="var(--primary-color)" 
                  className="bi bi-clock me-3 flex-shrink-0 mt-1" 
                  viewBox="0 0 16 16"
                >
                  <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/>
                  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"/>
                </svg>
                <span className="text-muted">
                  Monday - Friday<br />
                  9:00 AM - 5:00 PM
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="my-5" />
        
        <div className="row">
          <div className="col-md-12 text-center">
            <p className="text-muted mb-0">
              &copy; {new Date().getFullYear()} SchoolFinder. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 