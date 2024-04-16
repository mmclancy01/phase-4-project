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

import {
    WorkoutLoader,
    ExerciseLoader,
    userLoader
  } from './loaders.js'
import Profile from "./components/Profile.jsx";



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
          }

        ],
      },
      {
        path: "*",
        element: <h1>This page does not exist</h1>,
      },
    ]);
  

  
  ReactDOM.createRoot(document.getElementById("root")).render(<RouterProvider router={routes} />);
