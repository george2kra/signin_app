import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
}  from 'react-router-dom';
import logo from './boomerang.png';
import './App.css';

class App extends Component {
  render() {
    return (
      // { !!error && <p>{error.message}</p> 
      <Router>
      <div className="App">
        <nav>
         <Link to="/">HomePage</Link>
         <Link to="/signin">Sign In</Link>
         <Link to="/signup">Sign Up</Link>
        </nav>

        <Route exact path='/' render={
            () => (
              <div>
                <h1> HomePage </h1>
              </div>
            )
        }/>

        <Route path='/signin' render={
            () => (
              <div>
                <h1> Log In </h1>
              </div>
            )
        }/>

        <Route path='/signup' render={
            () => (
              <div>
                <h1> Register </h1>
              </div>
            )
        }/>


        </div>
      </Router>
    );
  }
}

export default App;
