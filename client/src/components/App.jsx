import React from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import FeatureSection from './FeatureSection';
import Footer from './Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <Footer />
    </div>
  );
}

export default App;
