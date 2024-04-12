import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeatureSection from './components/FeatureSection';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';
import './App.css';


function App() {

  return (
    <div className="app">
      <Navbar />
      <Outlet />
      <Footer />
      
    </div>
  );
}

export default App;
