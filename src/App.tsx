import React from 'react';
import NavBar from './NavBar';
import Home from './Home';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from './About';
import Chapters from './Chapters';
import Events from './Events';
function App() {
  return (
    <Router>
       
        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/units" element={<Chapters/>} />
          <Route path="/events" element={<Events/>} />
        </Routes>
      
    </Router>
  );
}

export default App;