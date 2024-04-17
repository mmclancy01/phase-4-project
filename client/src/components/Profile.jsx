import React from 'react';


const Profile = ({ name, height, weight, weightGoal }) => {
  return (
    <div className="container">
      <div className="profile-info">
        <h1>{name}🏋️‍♂️ </h1>
        <h2>Profile </h2>
        <p><strong>Height:</strong> {height} cm</p>
        <p><strong>Weight:</strong> {weight} kg</p>
        <p><strong>Weight Goal:</strong> {weightGoal} kg</p>
      </div>
      <img className="profile-image" src="https://cdn4.iconfinder.com/data/icons/medical-icons-rounded-vector/1250/path_health_calculator-512.png" alt="Health Calculator" />
    </div>
  );
};

export default Profile;