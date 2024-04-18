import React, { useState } from "react";
import { useOutletContext, useNavigate } from 'react-router-dom';

function SignUpForm({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [goal, setGoal] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [bio, setBio] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const {loggedin, setLoggedin} = useOutletContext()
  const navigate = useNavigate();
    

  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
    fetch("'http://127.0.0.1:5555/signup'", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
       "username": username,
        "_password": password,
        "age" :age,
        "weight":weight,
        "height":height,
        "goal_weight":goal
      }),
    }).then((response)=> response.json())
    .then((user)=> {
    setLoggedin(user)
    navigate("/profile")
    }) 
  }

  return (
    <form onSubmit={handleSubmit}>
     <label>
    Username:
    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
  </label>
  <br />
  <label>
    Current Weight:
    <input type="text" value={weight} onChange={(e) => setWeight(e.target.value)} />
  </label>
  <br />
  <label>
    Goal Weight:
    <input type="text" value={goal} onChange={(e) => setGoal(e.target.value)} />
  </label>
  <br />
  <label>
    Height in cm:
    <input type="text" value={height} onChange={(e) => setHeight(e.target.value)} />
  </label>
  <br />
  <label>
    Password:
    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
  </label>
  <br />
  <label>
    Confirm Password:
    <input type="password" value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} />
  </label>
  <br />
  <button type="submit">Sign Up</button>
    </form>
  );
}

export default SignUpForm;