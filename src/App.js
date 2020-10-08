import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

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
          <Navbar logo={logo}/>
          <ToastContainer position={toast.POSITION.TOP_RIGHT} autoClose={2000} hideProgressBar={true}/>
          <Route path="/" exact component={ExercisesList} />
          <Route path="/edit/:id" component={EditExercise} />
          <Route path="/create" component={CreateExercise} />
          <Route path="/user" exact component={CreateUser} />
        </div>
    </Router>
  );
}

export default App;
