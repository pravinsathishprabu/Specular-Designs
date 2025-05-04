import { useState } from 'react';
import logo from '../assets/SPECULAR_LOGO.png';
import Navbar from './nav';

function Home() {
  return (
    <>
      <Navbar />
      <div className="row p-4">
        {/* Logo Section */}
        <div className="col-lg-6 col-md-12 p-4 text-center">
          <img
            src={logo}
            alt="Welcome"
            className="img-fluid col-md-9"
            style={{ borderRadius: '10px', maxWidth: '100%' }}
          />
        </div>

        {/* Welcome Text Section */}
        <div className="col-lg-6 col-md-12 vh-80 d-flex justify-content-center align-items-center">
          <div className="p-4">
            <div className="typing-container">
              <h4>
                WELCOME TO <span className="text-primary">SPECULAR DESIGN</span>
              </h4>
            </div>
            <hr />
            <div className="mt-3 text-start">
              <p>
                <i className="bi bi-check-circle-fill text-success me-2"></i>
                We strip away the unnecessary to reveal what truly matters—space, light, and form.
              </p>
              <p>
                <i className="bi bi-check-circle-fill text-success me-2"></i>
                Our work blends minimalism with meaning, shaping environments that feel timeless and grounded.
              </p>
              <p>
                <i className="bi bi-check-circle-fill text-success me-2"></i>
                Every line we draw is quiet, intentional, and built to leave a lasting impression.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
