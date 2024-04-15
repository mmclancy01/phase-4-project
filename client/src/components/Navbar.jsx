import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Tracking Fitness</div>
      <ul className="nav-links">
        <li><a href="#Profile" className="nav-link">Profile</a></li>
        <li><a href="#Exercises" className="nav-link">Exercises</a></li>
        <li><a href="#Activity" className="nav-link">Activity</a></li>
        <li className="login-icon">
          <a href="#LogIn">
            <FontAwesomeIcon icon={faUserCircle} size="lg" />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
