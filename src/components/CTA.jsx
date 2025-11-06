import React from 'react';
import { ChevronRight } from 'lucide-react';
import './CTA.css';

function CTA() {
  return (
    <section className="cta">
      <div className="cta-container">
        <div className="cta-overlay"></div>
        <div className="cta-content">
          <h2 className="cta-title">Automated Delpoy Ready to Level Up??</h2>
          <p className="cta-description">
            Join thousands of athletes who trust Shoe Landing Page for peak performance
          </p>
          <button className="cta-button">
            Start Shopping
            <ChevronRight className="cta-icon" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default CTA;