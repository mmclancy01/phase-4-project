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
  async function userLoader({ request, params }) {
    const res = await fetch('http://127.0.0.1:5555/check_session', {
        method: 'GET',
        credentials: 'include'
      })
      .then(resp => {
        if (resp.ok) {
          return resp.json()
        } else {
          return {}
        }
      })
    return res
  }
  export {
    WorkoutLoader,
    ExerciseLoader,
    userLoader
  }