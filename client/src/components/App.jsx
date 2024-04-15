import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import FeatureSection from './FeatureSection';
import Footer from './Footer';
import Profile from './Profile'; // Import your Profile component
import Exercises from './Exercises'; // Import your Exercises component
import Activity from './Activity'; // Import your Activity component
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
