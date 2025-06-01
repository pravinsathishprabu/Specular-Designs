import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/SPECULAR_LOGO.png';

const Navbar = () => {
  const navigate = useNavigate();

  const handleNavClick = (path) => (e) => {
    e.preventDefault();
    const navbarCollapse = document.getElementById('navbarNav');
    if (navbarCollapse && navbarCollapse.classList.contains('show')) {
      navbarCollapse.classList.remove('show'); // ✅ collapse
    }
    navigate(path); // ✅ route
  };

  return (
    <nav className="navbar navbar-expand-lg bg-info">
      <div className="container-fluid">
        <img src={logo} alt="Logo" width="40" height="45" className="rounded bg-light" />
        <span className="navbar-brand text-white p-1"><b>SPECULAR DESIGN</b></span>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav ms-auto">
            <a href="/" className="nav-link text-white" onClick={handleNavClick('/')}><i className="bi bi-house-fill me-1" /> Home</a>
            <a href="/services" className="nav-link text-white" onClick={handleNavClick('/services')}><i className="bi bi-briefcase-fill me-1" /> Services</a>
            <a href="/projects" className="nav-link text-white" onClick={handleNavClick('/projects')}><i className="bi bi-card-image me-1" /> Projects</a>
            <a href="/contacts" className="nav-link text-white" onClick={handleNavClick('/contacts')}><i className="bi bi-envelope-fill me-1" /> Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

