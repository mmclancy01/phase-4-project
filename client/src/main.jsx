import { createBrowserRouter, RouterProvider } from "react-router-dom"
import React from "react";
import ReactDOM from "react-dom/client"
import App from './App.jsx'
import Workouts from "./components/Workouts.jsx"
import Exercises from "./components/Exercises.jsx"
import Home from "./components/Home.jsx"

import {
    WorkoutLoader,
    ExerciseLoader
  } from './loaders.js'

// set up browser routes
const Main = () => {
    const routes = createBrowserRouter([
      {
        path: "/",
        element: <App />,
        children: [
          {
            path: "/home",
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
  
          }
        ],
      },
      {
        path: "*",
        element: <h1>This page does not exist</h1>,
      },
    ]);
  
    return (
      <React.StrictMode>
        <RouterProvider router={routes} />
      </React.StrictMode>
    );
  };
  
//   ReactDOM.createRoot(document.getElementById("root")).render(<Main />);