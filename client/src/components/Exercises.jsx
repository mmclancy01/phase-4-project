import React, { useState }from 'react';
import { useLoaderData, useOutletContext } from "react-router-dom"
function Exercises() {
  const exercises = useLoaderData();
  const [selectedMuscleGroup, setSelectedMuscleGroup] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState('');
  const [selectedPushPullLegs, setSelectedPushPullLegs] = useState('');

  if (!exercises) {
    return <p>Loading...</p>;
  }

  // Handle changes for each dropdown
  const handleMuscleGroupChange = (event) => {
    setSelectedMuscleGroup(event.target.value);
  };

  const handleDifficultyChange = (event) => {
    setSelectedDifficulty(event.target.value);
  };

  const handlePushPullLegsChange = (event) => {
    setSelectedPushPullLegs(event.target.value);
  };

  // Filter exercises based on the selected criteria
  const filteredExercises = exercises.filter(exercise => {
    return (selectedMuscleGroup === '' || exercise.muscle_group === selectedMuscleGroup) &&
           (selectedDifficulty === '' || exercise.difficulty === selectedDifficulty) &&
           (selectedPushPullLegs === '' || exercise.push_pull === selectedPushPullLegs);
  });

  return (
    <div className="exercises-grid">
      <h2>Exercise List</h2>
      <div className="dropdown-container">
        <label htmlFor="muscle-group-select">Choose a muscle group:</label>
        <select id="muscle-group-select" onChange={handleMuscleGroupChange} value={selectedMuscleGroup}>
          <option value="">All</option>
          <option value="Chest">Chest</option>
          <option value="Back">Back</option>
          <option value="Legs">Legs</option>
          <option value="Shoulders">Shoulders</option>
          <option value="Arms">Arms</option>
        </select>

        <label htmlFor="difficulty-select">Choose a difficulty:</label>
        <select id="difficulty-select" onChange={handleDifficultyChange} value={selectedDifficulty}>
          <option value="">All</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </select>

        <label htmlFor="push-pull-legs-select">Push, Pull, or Legs:</label>
        <select id="push-pull-legs-select" onChange={handlePushPullLegsChange} value={selectedPushPullLegs}>
          <option value="">All</option>
          <option value="Push">Push</option>
          <option value="Pull">Pull</option>
          <option value="Legs">Legs</option>
        </select>
      </div>
      <div className="cards-container">
        {filteredExercises.map(exercise => (
          <div className="card" key={exercise.id}>
            <h3>{exercise.name}</h3>
            <img src={exercise.img} alt={`Image of ${exercise.name}`} />
            <p>Muscle Group: {exercise.muscle_group}</p>
            <p>Difficulty: {exercise.difficulty}</p>
            <p>Push/Pull/Legs: {exercise.push_pull}</p>
            {/* Add more exercise details as needed */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Exercises;