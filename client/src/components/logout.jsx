import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
export default function Logout() {
    const {loggedin, setLoggedin} = useOutletContext()
    const navigate = useNavigate();
  useEffect(() => {
    fetch('http://127.0.0.1:5555/logout', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
    })
    .then((response => response.json()))
    .then(()=> setLoggedin(null))
}, [])
  return (
    <p>{loggedin ? "Logged out successfully" : "Error logging out"}</p>
  )
}