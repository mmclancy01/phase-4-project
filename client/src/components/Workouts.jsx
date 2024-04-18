import React, { useState, useEffect } from 'react';
import { useLoaderData, useOutletContext } from "react-router-dom";
import Calendar from 'react-calendar';

 
 function Workouts() {
    const workouts = useLoaderData();
    const [value, onChange] = useState(new Date());
    const {loggedin, setLoggedin} = useOutletContext()
    
    // const user = useOutletContext()
    // useEffect(() => {
    //     fetch("http://localhost:5555/check_session")
    //       .then((resp) => resp.json())
    //       .then((data) => {
    //         console.log(data)
    //         setUser(data)
    //     })
    //   }, [])

    if (!loggedin) {
        return <p>Must be logged in to view this page</p>
      }
    // Function to format date to YYYY-MM-DD
    const formatDate = (date) => {
      return new Date(date).toISOString().split('T')[0];
    };
  
    // Filter workouts based on the selected date
    
    const filterbyUser = workouts.filter(work => work.user_id === loggedin.id)
    const filteredWorkouts = filterbyUser.filter(workout => formatDate(workout.date) === formatDate(value));
    const workoutDates = filterbyUser.map(w => new Date(w.date));
    const highlightWorkoutDays = ({ date }) => {
      const isWorkoutDay = workoutDates.some(workoutDate =>
        date.getFullYear() === workoutDate.getFullYear() &&
        date.getMonth() === workoutDate.getMonth() &&
        date.getDate() === workoutDate.getDate()+1
      );
  
      // Return a class name to highlight the date
      return isWorkoutDay ? 'workout-day' : null;
    };
  
    return (
      <div>
        <div className='dede'>
        <h2>{loggedin.username}'s Workouts</h2>
        </div>
        <div className="calendar-container">
          <Calendar
            tileClassName={highlightWorkoutDays}
            onChange={onChange}
            value={value}
            nextLabel="Next"
            prevLabel="Back"
          />
        </div>
        <div className="workouts-list-container">
          {filterbyUser.length > 0 ? (
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