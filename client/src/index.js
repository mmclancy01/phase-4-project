import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Workouts from "./components/Workouts.jsx"
import Exercises from "./components/Exercises.jsx"
import Home from "./components/Home.jsx"
import Login from "./components/Login.jsx"
import Logout from "./components/logout.jsx"
import CreateWorkoutForm from "./components/NewWorkout.jsx"

import {
    WorkoutLoader,
    ExerciseLoader,
    userLoader
  } from './loaders.js'
import Profile from "./components/Profile.jsx";
import SignUpForm from "./components/Signup.jsx";



    const routes = createBrowserRouter([
      {
        path: "/",
        element: <App />,
        loader: userLoader,
        children: [
          {
            path: "/",
            element: <Home />,
          },
          {
            path: "/exercises",
            element: <Exercises />,
            loader: ExerciseLoader
          },
          {
            path: "/workouts",
            element: <Workouts />,
            loader: WorkoutLoader
  
          },
          {
            path: "/login",
            element: <Login />,
          },
          {
            path: "/profile",
            element: <Profile />,
          },
          {
            path: "/logout",
            element: <Logout />,
          },
          {
            path: "/new",
            element: <CreateWorkoutForm />,
            loader: WorkoutLoader
          },
          {
            path: "/signup",
            element: <SignUpForm />,
          },

        ],
      },
      {
        path: "*",
        element: <h1>This page does not exist</h1>,
      },
    ]);
  

  
  ReactDOM.createRoot(document.getElementById("root")).render(<RouterProvider router={routes} />);
