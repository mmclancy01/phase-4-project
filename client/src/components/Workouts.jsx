import React from 'react';
import { useLoaderData, useOutletContext } from "react-router-dom"

function Workouts(){
  const workouts = useLoaderData()
return (
    <div>
        <h2>User Workouts</h2>
        <ul>
        {workouts.map(w => (
                <li key = {w.id}>
                    <p>Date: {w.date} </p>
                    <p>Duration: {w.duration} minutes </p>
                    <p>Notes: {w.notes} </p>
                    <p>Exercises:</p>
                    <ul>
                    {w.workout_exercises.map(e => ( 
                            <li >
                                <p>Name: {e.exercise_id} </p>
                                <p>Sets: {e.sets} </p>
                                <p>Reps: {e.reps} </p>
                            </li>
                    ))}
                    </ul>
                </li>
        ))}
        </ul>
    </div>
);
};

export default Workouts;