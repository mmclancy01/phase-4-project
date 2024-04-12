import React from 'react';

function Navbar() {
  return (
    <nav>
      <div className="logo">Track App</div>
      <ul>
        <li><a href="#Profile">Profile</a></li>
        <li><a href="#Exercises">Exercises</a></li>
        <li><a href="#Activity">Activity</a></li>
        <li><a href="#LogIn">Log In</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
