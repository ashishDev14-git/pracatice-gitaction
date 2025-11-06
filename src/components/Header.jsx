import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import './Header.css';

function Header() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <nav className="header">
      <div className={`logo ${isVisible ? 'visible' : ''}`}>
        Shoe Landing Page
      </div>
      <div className={`nav-links ${isVisible ? 'visible' : ''}`}>
        <Link to="/">Collection</Link>
        <Link to="/">Technology</Link>
        <Link to="/">About</Link>
      </div>
      <button className={`cart-btn ${isVisible ? 'visible' : ''}`}>
        <ShoppingBag className="icon" />
        <span>Cart (0)</span>
      </button>
    </nav>
  );
}

export default Header;