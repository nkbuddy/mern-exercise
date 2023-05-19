import React from 'react';
import {BrowserRouter as Router,Route, Routes} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.componenet";
import ExercisesList from "./components/exercises-list.componenet";
import EditExercises from "./components/edit-exercises.componenet";
import CreateExercise from "./components/create-exercise.componenet";
import CreateUser from "./components/create-user.componenet";

function App() {
  return (
    <Router>
      <div className='container'>
    <Navbar/>
    <br/>
    <Routes>
    <Route path="/" exact Component={ExercisesList}/>
    <Route path="/edit/:id" Component={EditExercises}/>
    <Route path="/create" Component={CreateExercise}/>
    <Route path="/user" Component={CreateUser}/>
    </Routes>
    </div>
    </Router>
  );
}

export default App;
