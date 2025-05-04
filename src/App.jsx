import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Pages/nav'
import Services from './Pages/services'
import Contact from './Pages/contacts'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';

import logo from './assets/SPECULAR_LOGO.png'
import Home from './Pages/home'
import Work from './Pages/works'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Work />} />
        <Route path="/contacts" element={<Contact />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </Router>
      <div className="social-icons">
        <a href="https://facebook.com" target="_blank">
          <i className="bi bi-facebook"></i>
        </a>
        <a href="https://www.instagram.com/specular_design_studio/?utm_source=qr&igsh=NXF1M3l4dXVxdWly#" target="_blank">
          <i className="bi bi-instagram text-danger"/>
        </a>
        <a href="https://www.linkedin.com/in/karthi-selvam-44029a20a/" target="_blank">
          <i className="bi bi-linkedin text-info"/>
        </a>
        <a href="https://www.youtube.com/@SpecularDesignStudio" target="_blank">
          <i className="bi bi-youtube text-danger"/>
        </a>
    </div>

      {/*<Home/>*/}
    </>
  )
}

export default App
