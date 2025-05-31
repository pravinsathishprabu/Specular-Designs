import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import logo from '../assets/SPECULAR_LOGO.png';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-info">
      <div className="container-fluid">
        <img src={logo} alt="Logo" width="40" height="45" className="rounded bg-light d-inline-block align-text-top" />
        <a className="navbar-brand" href="#">
          <b className="text-white p-1">SPECULAR DESIGN</b>
        </a>
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
            {/* Navigation Links */}
            <Link to="/" className="nav-link text-white"><b><i class="bi bi-house-fill"/><span> Home</span></b></Link>
            <Link to="/services" className="nav-link text-white"><b><i class="bi bi-briefcase-fill"/><span> Services</span></b></Link>
            <Link to="/projects" className="nav-link text-white"><b><i class="bi bi-card-image"/><span> Projects</span></b></Link>
            <Link to="/contacts" className="nav-link text-white"><b><i class="bi bi-envelope-fill"/><span>Contact</span></b></Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
