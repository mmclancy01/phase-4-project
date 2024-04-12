async function ExerciseLoader({ request, params }) {
    const res = await fetch("http://127.0.0.1:5555/exercises")
      .then(resp => resp.json())
    return res
  }

async function WorkoutLoader({ request, params }) {
    const res = await fetch(`http://127.0.0.1:5555/workouts`)
        .then(resp => resp.json())
    return res
  }

  export {
    WorkoutLoader,
    ExerciseLoader
  }