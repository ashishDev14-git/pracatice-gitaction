import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <div className="footer-logo">Shoe Landing Page</div>
          <p className="footer-tagline">Elevating performance through innovation</p>
        </div>
        
        <div className="footer-section">
          <h4 className="footer-heading">Shop</h4>
          <div className="footer-links">
            <a href="#" className="footer-link">New Arrivals</a>
            <a href="#" className="footer-link">Bestsellers</a>
            <a href="#" className="footer-link">Sale</a>
          </div>
        </div>
        
        <div className="footer-section">
          <h4 className="footer-heading">Support</h4>
          <div className="footer-links">
            <a href="#" className="footer-link">Contact Us</a>
            <a href="#" className="footer-link">Size Guide</a>
            <a href="#" className="footer-link">Returns</a>
          </div>
        </div>
        
        <div className="footer-section">
          <h4 className="footer-heading">Follow Us</h4>
          <div className="footer-links">
            <a href="#" className="footer-link">Instagram</a>
            <a href="#" className="footer-link">Twitter</a>
            <a href="#" className="footer-link">YouTube</a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>© 2025 Shoe Landing Page. All rights reserved. Crafted with excellence.</p>
      </div>
    </footer>
  );
}

export default Footer;