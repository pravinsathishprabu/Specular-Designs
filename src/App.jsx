import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Pages/nav';
import Services from './Pages/services';
import Contact from './Pages/contacts';
import Home from './Pages/home';
import Work from './Pages/works';

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
    </Router>
  );
}

export default App;
