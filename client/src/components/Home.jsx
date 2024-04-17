// Home.js
import React from 'react';


const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to Fitness Tracker</h1>
      <p>Track your workouts, set goals, and stay healthy.</p>
      <img 
        src="https://i.fbcd.co/products/original/gym-body-fitness-logo-man-and-woman-athletic-symbols-emblem-pw-ae271d847909ea34cab3b4bc490b94a334916286bcdcd13d1bf6fb05ad488c7e.jpg" 
        alt="Fitness Tracker Logo" 
        className="fitness-logo"
      />
      <button className="get-started-button">Get Started</button>
    </div>
  );
};

export default Home;
