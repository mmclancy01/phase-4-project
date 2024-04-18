import React from 'react';
import { Link } from "react-router-dom";
function Navbar({loggedin, setLoggedin}) {
  
  return (
    <nav>
      <a  href="/"><div className="logo">Fit Track</div> </a>
      <div className= 'navbar'>
      <ul>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/exercises">Exercises</Link></li>
        <li><Link to="/workouts">Workouts</Link></li>
        <li><Link to="/new">New Workout</Link></li>
        <li> <Link to="/logout">Logout</Link> </li>
        <li><Link to="/login">Login</Link></li>
        
      </ul>
      </div>
    </nav>
  );
}

export default Navbar;
