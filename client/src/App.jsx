import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeatureSection from './components/FeatureSection';
import Footer from './components/Footer';
import { Outlet, useLoaderData,  } from "react-router-dom"
import './App.css';


function App() {
  const [loggedin, setLoggedIn]= useState(null)
  const user = useLoaderData()
  console.log(user)
  return (
    <div className="app">
      <Navbar  />
      <Outlet context={{setLoggedin: setLoggedIn, loggedin: loggedin}} />
      <Footer />
      
    </div>
  );
}

export default App;
