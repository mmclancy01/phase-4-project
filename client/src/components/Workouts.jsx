import React, { useState } from 'react';
import { useLoaderData, useOutletContext } from "react-router-dom";
import Calendar from 'react-calendar';

 
 function Workouts() {
    const workouts = useLoaderData();
    const [value, onChange] = useState(new Date());
    const user = useOutletContext()
    if (!user) {
        return <p>Must be logged in to view this page</p>
      }
    // Function to format date to YYYY-MM-DD
    const formatDate = (date) => {
      return new Date(date).toISOString().split('T')[0];
    };
  
    // Filter workouts based on the selected date
    const filteredWorkouts = workouts.filter(workout => formatDate(workout.date) === formatDate(value));
    const workoutDates = workouts.map(w => new Date(w.date));
    const highlightWorkoutDays = ({ date }) => {
      // Check if the calendar date is in workoutDates
      const isWorkoutDay = workoutDates.some(workoutDate =>
        date.getFullYear() === workoutDate.getFullYear() &&
        date.getMonth() === workoutDate.getMonth() &&
        date.getDate() === workoutDate.getDate()
      );
  
      // Return a class name to highlight the date
      return isWorkoutDay ? 'workout-day' : null;
    };
  
    return (
      <div>
        <h2>User Workouts</h2>
        <div className="calendar-container">
          <Calendar
            onChange={onChange}
            value={value}
            tileClassName={highlightWorkoutDays}
            nextLabel="Next"
            prevLabel="Back"
          />
        </div>
        <div className="workouts-list-container">
          {filteredWorkouts.length > 0 ? (
            <ul className="workouts-list">
              {filteredWorkouts.map(w => (
                <li key={w.id} className="workout-item">
                  <p>Date: {w.date}</p>
                  <p>Duration: {w.duration} minutes</p>
                  <p>Notes: {w.notes}</p>
                  <p>Exercises:</p>
                  <ul className="exercises-list">
                    {w.workout_exercises.map((e, index) => (
                      <li key={index} className="exercise-item">
                        <p>Name: {e.exercises.name}</p>
                        <p>Sets: {e.sets}</p>
                        <p>Reps: {e.reps}</p>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          ) : (
            <p>No workouts found for this date.</p>
          )}
        </div>
      </div>
    );
  }
  
  export default Workouts;