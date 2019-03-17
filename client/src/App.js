import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// components
import Login from "./components/Login"
import About from './components/About'
import Admin from './components/Admin'


class App extends Component {

  render() {
    return (
      <div className="App">
      <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/admin">Admin</Link>
          </li>
        </ul>

        <hr />

        <Route exact path="/" component={Login} />
        <Route path="/about" component={About} />
        <Route path="/admin" component={Admin} />
      </div>
    </Router>

      </div>
    );
  }
}

export default App;
