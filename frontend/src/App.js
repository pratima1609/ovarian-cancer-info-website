import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './styles/App.css';
import Home from './pages/Home';
import About from './pages/About';
import Symptoms from './pages/Symptoms';
import Screening from './pages/Screening';
import Treatment from './pages/Treatment';
import Resources from './pages/Resources';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/symptoms" element={<Symptoms />} />
        <Route path="/screening" element={<Screening />} />
        <Route path="/treatment" element={<Treatment />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
