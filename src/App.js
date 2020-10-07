import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './components/navbar';
import ExercisesList from './components/exercisesList';
import EditExercise from './components/editExercise';
import CreateExercise from './components/createExercise';
import CreateUser from './components/createUser';

import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <Router>
        <div className="container">
          <Navbar />
          <Route path="/" exact component={ExercisesList} />
          <Route path="/edit/:id" component={EditExercise} />
          <Route path="/create" component={CreateExercise} />
          <Route path="/user" exact component={CreateUser} />
        </div>
    </Router>
  );
}

export default App;
