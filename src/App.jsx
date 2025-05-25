import { useState,useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Pages/nav';
import Services from './Pages/services';
import Contact from './Pages/contacts';
import Home from './Pages/home';
import Work from './Pages/works';
import LoadingBar from './Pages/loadingbar';
import { preloadImages } from './Pages/preloadImages';


const imageList = [
  '../assets/Interior.jpg',
  '../assets/Exterior.jpg',
  '../assets/Architecture design.jpg',
  '../assets/urban planning.jpg',
  '../assets/cover.jpg',
  '../assets/welcome.png',
  '../assets/SPECULAR_LOGO.png',

  // add all images here
];


function App() {
  
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    preloadImages(imageList, setProgress)
      .then(() => setLoading(false))
      .catch((err) => {
        console.error('Error preloading images:', err);
        setLoading(false); // Continue even if some fail
      });
  }, []);

  if (loading) return <LoadingBar progress={progress} />;
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
