import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About</h3>
          <p>Educational resource for ovarian cancer information and awareness.</p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="https://www.cancer.org" target="_blank" rel="noopener noreferrer">American Cancer Society</a></li>
            <li><a href="https://www.cancer.gov" target="_blank" rel="noopener noreferrer">National Cancer Institute</a></li>
            <li><a href="https://www.mayoclinic.org" target="_blank" rel="noopener noreferrer">Mayo Clinic</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: info@ovarianinfo.com</p>
          <p>Phone: 1-800-CANCER-1</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 Ovarian Cancer Information Website. All rights reserved.</p>
        <p><small>This website is for educational purposes only. Always consult with healthcare professionals.</small></p>
      </div>
    </footer>
  );
}

export default Footer;