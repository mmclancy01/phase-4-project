import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeatureSection from './components/FeatureSection';
import Footer from './components/Footer';
import { Outlet, useLoaderData,  } from "react-router-dom"
import './App.css';


function App() {
  const user = useLoaderData()
  return (
    <div className="app">
      <Navbar />
      <Outlet context={user} />
      <Footer />
      
    </div>
  );
}

export default App;
