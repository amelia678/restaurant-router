import React, { Component } from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  // Link
} from 'react-router-dom';

import About from './About';
import Home from './Home';
import Restaurants from './Restaurants';
import NavBar from './NavBar';
import OneNeighbor from './OneNeighbor';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: {
        'Buckhead': [
          'Ru Sans',
          'Maggianos',
          'H & F Burger'
          
        ],

        'Decatur' : [
          'Brick Store',
          '249',
          'Victory'
        ],
        
        'Midtown' : [
          'La Fonda',
          'Varuni Napoli',
          'Mary Macs'
        ]
      }
    }
  }
  render() {
    return (
      <Router>
      <div className="App">
      
        <NavBar />
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/restaurants" exact component={Restaurants} />
        <Route path="/restaurants/:neighborhood" component={OneNeighbor} />
      </div>
      </Router>
    );
  }
}

export default App;
