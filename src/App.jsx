import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Pages/nav';
import Services from './Pages/services';
import Contact from './Pages/contacts';
import Home from './Pages/home';
import Work from './Pages/works';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  return (
    <Router basename="/Specular-Designs">
      <Navbar />      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Work />} />
        <Route path="/contacts" element={<Contact />} />
      </Routes>

      <div className="social-icons">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-facebook"></i>
        </a>
        <a href="https://www.instagram.com/specular_design_studio/?utm_source=qr&igsh=NXF1M3l4dXVxdWly#" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-instagram text-danger" />
        </a>
        <a href="https://www.linkedin.com/in/karthi-selvam-44029a20a/" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-linkedin text-info" />
        </a>
        <a href="https://www.youtube.com/@SpecularDesignStudio" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-youtube text-danger" />
        </a>
      </div>
    </Router>
  );
}

export default App;
