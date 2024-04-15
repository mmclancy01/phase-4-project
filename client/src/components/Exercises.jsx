import React from 'react';
import { useLoaderData, useOutletContext } from "react-router-dom"
function Exercises() {
    const exercises = useLoaderData()
    if (!exercises){
        return <p>Loading...</p>
    }
    return (
        <div>
            <h2>Exercise List</h2>
            <ul>
            {exercises.map(exercise => (
                    <li key = {exercise.id}>
                        <p>Name: {exercise.name}  </p>
                        <p>Muscle Group: {exercise.muscle_group} </p>
                        <p>Difficulty: {exercise.difficulty} </p>
                        <p>{exercise.push_pull} </p>
                        {/* Add more exercise details as needed */}
                    </li>
            ))}
            </ul>
        </div>
    );


}

export default Exercises;