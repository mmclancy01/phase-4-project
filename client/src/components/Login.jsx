import React, { useState } from 'react';

function Login() {
    const [error, setError] = useState()
    const [msg, setMsg] = useState()

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
        .then(resp => {
          if (resp.ok) {
            setMsg('Log in successful!');
            return resp.json(); // Ensure we only call .json() when the response is ok.
          } else {
            setMsg('Log in failed!');
            return resp.json().then(data => Promise.reject(data)); // Properly reject with error data after parsing JSON.
          }
        })
        .then(data => {
          // Handle your data from resp.json() here
        })
        .catch(error => {
          setError(error); // Now error is the parsed JSON error data.
        });
      }

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