import React, { useState, useEffect } from 'react';
import { ChevronRight, Star } from 'lucide-react';
import './Hero.css';

function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="hero">
      <div className="hero-container">
        <div className={`hero-content ${isVisible ? 'visible' : ''}`}>
          <div className="rating-badge">
            <Star className="star-icon" />
            Rated 4.9/5 by 10k+ Athletes
          </div>
          
          <h1 className="hero-title">
            Elevate Your
            <span className="gradient-text">Performance</span>
          </h1>
          
          <p className="hero-description">
            Experience the next generation of athletic footwear. Engineered with cutting-edge technology and designed for champions.
          </p>
          
          <div className="hero-buttons">
            <button className="btn-primary">
              Shop Now
              <ChevronRight className="btn-icon" />
            </button>
            <button className="btn-secondary">
              Watch Story
            </button>
          </div>

          <div className="hero-stats">
            <div className="stat">
              <div className="stat-value purple">50K+</div>
              <div className="stat-label">Happy Customers</div>
            </div>
            <div className="stat">
              <div className="stat-value blue">4.9★</div>
              <div className="stat-label">Average Rating</div>
            </div>
            <div className="stat">
              <div className="stat-value orange">100%</div>
              <div className="stat-label">Satisfaction</div>
            </div>
          </div>
        </div>

        <div className={`hero-image ${isVisible ? 'visible' : ''}`}>
          <div className="shoe-container" style={{ transform: `translateY(${scrollY * -0.1}px)` }}>
            <div className="glow-effect"></div>
            <div className="shoe-card">
              <div className="shoe-inner">
                <div className="rotating-border"></div>
                <div className="shoe-display" style={{ transform: `rotate(${scrollY * 0.05}deg)` }}>
                  <div className="shoe-emoji">👟</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;