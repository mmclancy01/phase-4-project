import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeatureSection from './components/FeatureSection';
import Footer from './components/Footer';
import Profile from './components/Profile'; // Import your Profile component
import Exercises from './components/Exercises'; // Import your Exercises component
import Activity from './components/Activity'; // Import your Activity component
import './App.css'; // Import CSS file

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Switch>
          <Route path="/" exact component={HeroSection} />
          <Route path="/profile" component={Profile} />
          <Route path="/exercises" component={Exercises} />
          <Route path="/activity" component={Activity} />
        </Switch>
        <FeatureSection />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
