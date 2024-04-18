import React, { useState } from 'react';
import { useLoaderData, useOutletContext } from "react-router-dom";

const CreateWorkoutForm = () => {
    const { loggedin } = useOutletContext();
    const [formData, setFormData] = useState({
        user_id: loggedin ? loggedin.id : null,
        date: '',
        duration: '',
        notes: '',
        workout_exercises: [],
    });
    const [error, setError] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch('http://127.0.0.1:5555/workouts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify(formData)
        })
        .then((resp) => {
            if (!resp.ok) {
                throw new Error('Failed to create workout');
            }
            return resp.json();
        })
        .then((data) => {
            console.log(data);
            setFormData({
                user_id: loggedin ? loggedin.id : null,
                date: '',
                duration: '',
                notes: '',
                workout_exercises: [],
            });
        })
        .catch((error) => {
            console.error('Error:', error);
            setError('Failed to create workout');
        });
    };

    const handleExerciseChange = (index, e) => {
        const { name, value } = e.target;
        const newExercises = [...formData.workout_exercises];
        newExercises[index] = {
            ...newExercises[index],
            [name]: value,
        };
        setFormData({
            ...formData,
            workout_exercises: newExercises,
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const addExercise = () => {
        setFormData({
            ...formData,
            workout_exercises: [...formData.workout_exercises, { exercise_id: '', reps: '', sets: '' }],
        });
    };

    return (
        <div>
            {loggedin ? (
                <div>
                    <h2>Create Workout</h2>
                    <form onSubmit={handleSubmit}>
                        <label>Date:</label>
                        <input type="date" name="date" value={formData.date} onChange={handleChange} required />
                        <br />
                        <label>Duration (minutes):</label>
                        <input type="number" name="duration" value={formData.duration} onChange={handleChange} required />
                        <br />
                        <label>Notes:</label>
                        <textarea name="notes" value={formData.notes} onChange={handleChange} />
                        <br />
                        {formData.workout_exercises.map((exercise, index) => (
                            <div key={index}>
                                <h3>Exercise {index + 1}</h3>
                                <label>Exercise Name:</label>
                                <input type="text" name="exercise_id" value={exercise.exercise_id} onChange={(e) => handleExerciseChange(index, e)} />
                                <br />
                                <label>Reps:</label>
                                <input type="number" name="reps" value={exercise.reps} onChange={(e) => handleExerciseChange(index, e)} />
                                <br />
                                <label>Sets:</label>
                                <input type="number" name="sets" value={exercise.sets} onChange={(e) => handleExerciseChange(index, e)} />
                                <br />
                            </div>
                        ))}
                        <button type="button" onClick={addExercise}>Add Exercise</button>
                        <br />
                        <button type="submit">Create Workout</button>
                    </form>
                </div>
            ) : (
                <p>Please log in to create a workout.</p>
            )}
        </div>
    );
};

export default CreateWorkoutForm;