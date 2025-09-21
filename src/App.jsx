import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Pages/nav';
import Services from './Pages/services';
import Contact from './Pages/contacts';
import Home from './Pages/home';
import Work from './Pages/works';
import LoadingBar from './Pages/loadingbar';
import ChatWidget from './Pages/chatbot';
import { preloadImages } from './Pages/preloadImages';

const imageList = [
  './assets/Interior.jpg',
  './assets/Exterior.jpg',
  './assets/Architecture design.jpg',
  './assets/urban planning.jpg',
  './assets/cover.jpg',
  './assets/welcome.png',
  './assets/SPECULAR_LOGO.png',
  // add all images here
];

function App() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const startTime = Date.now();

    preloadImages(imageList, setProgress)
      .then(() => {
        const elapsed = Date.now() - startTime;
        const remainingTime = Math.max(0, 10000 - elapsed); // Ensure 10s minimum
        setTimeout(() => setLoading(false), remainingTime);
      })
      .catch((err) => {
        console.error('Error preloading images:', err);
        // Still enforce 10s minimum load time
        const elapsed = Date.now() - startTime;
        const remainingTime = Math.max(0, 10000 - elapsed);
        setTimeout(() => setLoading(false), remainingTime);
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
        <Route path="/chat" element={<ChatWidget />} />
      </Routes>
    </Router>
  );
}

export default App;
