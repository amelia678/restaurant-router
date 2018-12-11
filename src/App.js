import React, { Component } from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import About from './About';
import Home from './Home';
import Restaurants from './Restaurants'

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
      
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/restaurants">Restuarants</Link></li>

        </ul>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/restaurants" exact component={Restaurants} />

      </div>
      </Router>
    );
  }
}

export default App;
