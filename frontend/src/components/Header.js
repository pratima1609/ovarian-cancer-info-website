import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h1>🎗️ Ovarian Cancer Info</h1>
        </div>
        <nav className="navbar">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/symptoms">Symptoms</Link>
          <Link to="/screening">Screening</Link>
          <Link to="/treatment">Treatment</Link>
          <Link to="/resources">Resources</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
