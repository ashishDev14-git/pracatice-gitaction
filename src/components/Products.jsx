import React from 'react';
import { ShoppingBag } from 'lucide-react';
import './Products.css';

function Products() {
  const shoes = [
    { 
      name: 'Quantum Pulse', 
      price: '$249', 
      color: 'purple-pink',
      tag: 'Bestseller' 
    },
    { 
      name: 'Velocity Pro', 
      price: '$199', 
      color: 'blue-cyan',
      tag: 'New' 
    },
    { 
      name: 'Urban Elite', 
      price: '$229', 
      color: 'orange-red',
      tag: 'Limited' 
    },
    { 
      name: 'Stealth Runner', 
      price: '$189', 
      color: 'gray-black',
      tag: 'Popular' 
    }
  ];

  return (
    <section className="products">
      <div className="products-header">
        <h2 className="products-title">Featured Collection</h2>
        <p className="products-subtitle">Discover your perfect pair</p>
      </div>

      <div className="products-grid">
        {shoes.map((shoe, idx) => (
          <div key={idx} className="product-card">
            <div className="product-tag">{shoe.tag}</div>
            
            <div className={`product-image ${shoe.color}`}>
              <div className="shoe-emoji">👟</div>
            </div>
            
            <h3 className="product-name">{shoe.name}</h3>
            <div className="product-footer">
              <span className="product-price">{shoe.price}</span>
              <button className="add-to-cart">
                <ShoppingBag className="cart-icon" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Products;