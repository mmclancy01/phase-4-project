import React from 'react';
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav>
      <div className="logo">Track App</div>
      <div className= 'navbar'>
      <ul>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/exercises">Exercise</Link></li>
        <li><Link to="/workouts">Workout</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
      </div>
    </nav>
  );
}

export default Navbar;
