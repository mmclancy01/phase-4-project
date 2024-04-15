// Home.js
import React from 'react';

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to Fitness Tracker</h1>
      <p>Track your workouts, set goals, and stay healthy.</p>
      <section className="features">
      <div className="feature">
        <h2>Personal Training</h2>
        <p>Get personalized workouts with top trainers.</p>
      </div>
      <div className="feature">
        <h2>Group Classes</h2>
        <p>Join group classes led by expert instructors.</p>
      </div>
      <div className="feature">
        <h2>Luxury Amenities</h2>
        <p>Enjoy luxurious facilities and amenities.</p>
      </div>
    </section>
      <button>Get Started</button>
    </div>
  );
};

export default Home;
