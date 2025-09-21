import { useState } from 'react';
import logo from '../assets/SPECULAR_LOGO.png';
import ChatWidget from './chatbot';

function Home() {
  return (
    <>
      <div className="row p-4">
        {/* Logo Section */}
        <div className="col-lg-6 col-md-12 p-4 text-center">
          <img
            src={logo}
            alt="Welcome"
            className="img-fluid col-md-9 shadow-lg"
            style={{ borderRadius: '10px', maxWidth: '100%' }}
          />
        </div>

        {/* Welcome Text Section */}
        <div className="col-lg-6 col-md-12 vh-80 d-flex justify-content-center align-items-center">
          <div className="box">
            <div className="typing-container">
              <h4>
                WELCOME TO <span style={{color: '#ee6e6c'}}>SPECULAR DESIGN STUDIO</span>
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
          <div className="social-icons">
            <a href="https://wa.me/916381378407" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-whatsapp text-success shadow"></i>
            </a>
            <a href="https://www.instagram.com/specular_design_studio/?utm_source=qr&igsh=NXF1M3l4dXVxdWly#" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-instagram shadow text-danger" />
            </a>
            <a href="https://www.linkedin.com/in/karthi-selvam-44029a20a/" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-linkedin shadow text-info" />
            </a>
            <a href="https://www.youtube.com/@SpecularDesignStudio" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-youtube shadow text-danger" />
            </a>
          </div>
          <ChatWidget/>
        </div>
      </div>
    </>
  );
}

export default Home;
