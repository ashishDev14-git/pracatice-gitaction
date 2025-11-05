import React, { useState, useEffect } from 'react';
import { Zap, TrendingUp, Sparkles } from 'lucide-react';
import './Features.css';

function Features() {
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    { 
      icon: <Zap className="feature-icon" />, 
      title: 'Lightning Fast', 
      desc: 'Revolutionary cushioning technology' 
    },
    { 
      icon: <TrendingUp className="feature-icon" />, 
      title: 'Peak Performance', 
      desc: 'Engineered for excellence' 
    },
    { 
      icon: <Sparkles className="feature-icon" />, 
      title: 'Premium Craft', 
      desc: 'Handcrafted perfection' 
    }
  ];

  return (
    <section className="features">
      <h2 className="features-title">
        Engineered For
        <span className="gradient-text">Excellence</span>
      </h2>
      
      <div className="features-grid">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className={`feature-card ${activeFeature === idx ? 'active' : ''}`}
            onMouseEnter={() => setActiveFeature(idx)}
          >
            <div className="feature-icon-wrapper">
              {feature.icon}
            </div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-desc">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;