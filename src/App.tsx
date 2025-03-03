import React from 'react';
import NavBar from './components/layout/NavBar';
import Home from './pages/Home';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from './pages/About';
import Chapters from './pages/Chapters';
import Events from './pages/Events';
import Footer from './components/common/Footer';
import JoinUs from './pages/JoinUs';
import Contact from './pages/Contact';
import Calendar from './pages/Calendar';
function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/units" element={<Chapters />} />
          <Route path="/events" element={<Events />} />
          <Route path="/join-us" element={<JoinUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/calendar" element={<Calendar />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;