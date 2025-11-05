import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Features from './components/Features';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="bg-black min-h-screen text-white overflow-hidden main-container">
        {/* Animated Background */}
        <div className="fixed inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-96 h-96 bg-purple-600 rounded-full filter blur-3xl animate-pulse" style={{ animationDuration: '4s' }}></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl animate-pulse" style={{ animationDuration: '6s' }}></div>
        </div>

        <Header />
        
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Features />
              <Products />
              <CTA />
            </>
          } />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;