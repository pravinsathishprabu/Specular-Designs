import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/SPECULAR_LOGO.png';
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle'; // ✅ make sure bootstrap is imported

const Navbar = () => {
  const navigate = useNavigate();

  const handleNavClick = (path) => (e) => {
    e.preventDefault();

    const offcanvasEl = document.getElementById("offcanvasNavbar");
    if (offcanvasEl) {
      let offcanvas = bootstrap.Offcanvas.getInstance(offcanvasEl);
      if (!offcanvas) {
        offcanvas = new bootstrap.Offcanvas(offcanvasEl); // ensure it's initialized
      }

      offcanvasEl.addEventListener(
        "hidden.bs.offcanvas",
        () => {
          const backdrop = document.querySelector(".offcanvas-backdrop");
          if (backdrop) backdrop.remove();
          document.body.classList.remove("offcanvas-backdrop", "offcanvas-open");
          document.body.style.overflow = "";
        },
        { once: true }
      );

      offcanvas.hide();
    }

    navigate(path);
  };

  return (
    <>
      {/* Header Navbar */}
      <nav className="navbar px-3 py-2" style={{ backgroundColor: 'white' }}>
        <div className="d-flex w-100 justify-content-between align-items-center">
          {/* Logo + Brand */}
          <div className="d-flex align-items-center flex-shrink-1">
            <img
              src={logo}
              alt="Logo"
              width="40"
              height="45"
              className="rounded bg-light me-2"
            />
            <span className="navbar-brand text-dark fs-5 mb-0 text-truncate">
              <b>SPECULAR DESIGN STUDIO</b>
            </span>
          </div>

          {/* Menu Toggle Button */}
          <button
            className="btn text-dark flex-shrink-0 MENU"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <i className="bi bi-list fs-3"></i>
          </button>
        </div>
      </nav>

      {/* Sidebar Offcanvas */}
      <div
        className="offcanvas offcanvas-start"
        tabIndex="-1"
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
        style={{
          width: '230px',
          backgroundColor: 'white',
        }}
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title text-danger" id="offcanvasNavbarLabel">Menu</h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>

        <div className="offcanvas-body d-flex flex-column">
          <a href="/" className="nav-link text-dark py-2" onClick={handleNavClick('/')}>
            &nbsp;&nbsp;<i className="bi bi-house-fill me-2" /> Home
          </a>
          <a href="/services" className="nav-link text-dark py-2" onClick={handleNavClick('/services')}>
            &nbsp;&nbsp;<i className="bi bi-briefcase-fill me-2" /> Services
          </a>
          <a href="/projects" className="nav-link text-dark py-2" onClick={handleNavClick('/projects')}>
            &nbsp;&nbsp;<i className="bi bi-image-fill me-2" /> Projects
          </a>
          <a href="/contacts" className="nav-link text-dark py-2" onClick={handleNavClick('/contacts')}>
            &nbsp;&nbsp;<i className="bi bi-envelope-fill me-2" /> Contact
          </a>

          {/* Developer Branding Section */}
          <div className="mt-auto text-center border-top pt-3">
            <small className="text-muted d-block">Developed by</small>
            <span className="fw-bold text-dark">Pravin Sathishbrabu</span>
            <br />
            <a href="mailto:iampravinsathishbrabu@gmail.com" className="text-decoration-none text-primary small">
              iampravinsathishbrabu@gmail.com
            </a>
            <br />
            <a href="tel:+919876543210" className="text-decoration-none text-success small">
              +91 9361347455
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
