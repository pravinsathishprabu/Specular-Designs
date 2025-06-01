import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/SPECULAR_LOGO.png';


const Navbar = () => {
  // ✅ Collapse handler
  const handleNavLinkClick = () => {
    const collapseElement = document.getElementById('navbarNav');
    if (collapseElement && collapseElement.classList.contains('show')) {
      new window.bootstrap.Collapse(collapseElement).hide();
    }
  };

  return (
    <nav className="navbar navbar-expand-lg bg-info">
      <div className="container-fluid">
        <img
          src={logo}
          alt="Logo"
          width="40"
          height="45"
          className="rounded bg-light d-inline-block align-text-top"
        />
        <span className="navbar-brand">
          <b className="text-white p-1">SPECULAR DESIGN</b>
        </span>

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
            <Link to="/" className="nav-link text-white" onClick={handleNavLinkClick}>
              <i className="bi bi-house-fill me-1" />
              Home
            </Link>
            <Link to="/services" className="nav-link text-white" onClick={handleNavLinkClick}>
              <i className="bi bi-briefcase-fill me-1" />
              Services
            </Link>
            <Link to="/projects" className="nav-link text-white" onClick={handleNavLinkClick}>
              <i className="bi bi-card-image me-1" />
              Projects
            </Link>
            <Link to="/contacts" className="nav-link text-white" onClick={handleNavLinkClick}>
              <i className="bi bi-envelope-fill me-1" />
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


/*import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/SPECULAR_LOGO.png';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-info">
      <div className="container-fluid">
        <img
          src={logo}
          alt="Logo"
          width="40"
          height="45"
          className="rounded bg-light d-inline-block align-text-top"
        />
        <span className="navbar-brand">
          <b className="text-white p-1">SPECULAR DESIGN</b>
        </span>
        
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
            <Link to="/" className="nav-link text-white">
              <i className="bi bi-house-fill me-1" />
              <span>Home</span>
            </Link>
            <Link to="/services" className="nav-link text-white">
              <i className="bi bi-briefcase-fill me-1" />
              <span>Services</span>
            </Link>
            <Link to="/projects" className="nav-link text-white">
              <i className="bi bi-card-image me-1" />
              <span>Projects</span>
            </Link>
            <Link to="/contacts" className="nav-link text-white">
              <i className="bi bi-envelope-fill me-1" />
              <span>Contact</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
*/