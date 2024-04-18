// Profile.js
import React from 'react';
import { useOutletContext } from 'react-router-dom';
const Profile = () => {
  const { loggedin } = useOutletContext();
  if (!loggedin) {
    return <p>Must be logged in to view this page</p>
  }
  return (
    <div className="profile-container">
      <h1>{loggedin.username}'s Profile</h1>
      <img src="data:image/png;base64,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" />
      <p>User Profile Information</p>
      <div className="profile-info">
      <p>{loggedin.username}'s Current Age: {loggedin.age} years old</p>
      <p>{loggedin.username}'s Current Height: {loggedin.height} cms</p>
        <p>{loggedin.username}'s Current Weight: {loggedin.weight} lbs</p>
        <p>{loggedin.username}'s Goal Weight: {loggedin.goal_weight} lbs</p>
        <p>{loggedin.username} has worked out {loggedin.workouts.length} times!!</p>
      </div>
    </div>
  );
};

export default Profile;
