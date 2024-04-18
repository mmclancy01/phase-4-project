import React, { useState } from 'react';
import { useOutletContext, useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    const [error, setError] = useState()
    const [msg, setMsg] = useState()
    const {loggedin, setLoggedin} = useOutletContext()
    function handleSubmit(event) {
        event.preventDefault();
        const data = {
          'username': event.target.username.value,
          'password': event.target.password.value
        };
      
        fetch('http://127.0.0.1:5555/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          credentials: 'include',
          body: JSON.stringify(data)
        })
        .then((response)=> response.json())
        .then((user)=> {
        if (user.id){
        setLoggedin(user)
        navigate("/profile")
    }})}
        

      const errorElement = error ? <p style={{color: 'red'}}>{error.error}</p> : null

      return (
        <>
        {msg ? <p>{msg}</p> : null}
        {errorElement}
        <form onSubmit={handleSubmit}>
          <label>Username: </label>
          <input type="text" name="username" /><br />
          <label>Password: </label>
          <input type="password" name="password" /><br />
          <input type="submit" />
        </form>
        </>
      )
    }

export default Login;