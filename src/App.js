import React, { Component } from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  // Link
} from 'react-router-dom';

import About from './About';
import Home from './Home';
import Neighborhoods from './Restaurants';
import NavBar from './NavBar';
import OneNeighbor from './OneNeighbor';
import OneRestaurant from './OneRestaurant';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      places: ['Buckhead', 'Decatur', 'Midtown'],
      locations: {
        'Buckhead': ['Ru Sans', 'Maggianos', 'H&F burger'],
        'Decatur': ['Brick Store', '249', 'Victory'],
        'Midtown': ['La Fonda', 'Varuni Napoli', 'Mary Macs']

      },
      restaurants: {
        'Ru Sans' : ['california roll', 'crunchy roll', 'lobster roll'],
        'Maggianos': ['chicken parmasean', 'lasagna', 'cheesecake'],
        'H&F Burger' : ['hamburger', 'veggie burger', 'milkshake', 'fries'],
        'Brick Store' : ['spinach artichoke dip', 'grilled cheese','lotsa beer'],
        '249' : ['black squid pasta','bolognese', 'red wine'],
        'Victory' : ['mini sandwiches', 'boozy milkshakes', 'crafty cocktails'],
        'La Fonda' : ['paella', 'fish tacos', 'margaritas'],
        'Varuni Napoli' : ['neopolitan pizza', 'cannolis'],
        'Mary Macs' : ['fried chicken', 'peach cobbler', 'fried okra', 'collard greens']
                  
      }
      // restaurants: {

    //      'Buckhead': {

    //         'Ru Sans' : {
    //           'items' : [
    //             'california roll',
    //             'crunchy roll',
    //             'lobster roll'
    //           ]
    //         },          
          
            
    //         'Maggianos': {
    //           'items' :[
    //             'chicken parmasean',
    //             'lasagna',
    //             'cheesecake'
    //           ]
    //         },
            
    //         'H & F Burger' : {
    //           'items' : [
    //             'hamburger',
    //             'veggie burger',
    //             'milkshake',
    //             'fries'
    //           ]
              
    //         }
            
    //       },
        

    //     'Decatur' : {

    //       'Brick Store' : {
    //         'items' : [
    //           'spinach artichoke dip',
    //           'grilled cheese',
    //           'lotsa beer'

    //         ]
    //       },
    //       '249' : {
    //         'items' : [
    //           'black squid pasta',
    //           'bolognese',
    //           'red wine'
    //         ]
    //       }, 
          
    //       'Victory': {
    //         'items' : [
    //           'mini sandwiches',
    //           'boozy milkshakes',
    //           'crafty cocktails'
    //         ]
    //       }
        
        
    //     },
        
    //     'Midtown' : {
    //       'La Fonda': {
    //         'items' : [
    //           'paella',
    //           'fish tacos',
    //           'margaritas'
    //         ]
    //       },

    //       'Varuni Napoli' : {
    //         'items' : [
    //           'neopolitan pizza',
    //           'cannolis',

    //         ]
    //       }, 

    //       'Mary Macs' : {
    //         'items': [
    //           'fried chicken',
    //           'peach cobbler',
    //           'fried okra',
    //           'collard greens'
    //         ]
    //       }
    //     }
    //   }
    }
  }
  render() {
    return (
      <Router>
      <div className="App">
      
        <NavBar />
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        {/* <Route path="/restaurants" exact component={Restaurants} />
        <Route path="/restaurants/:neighborhood" component={OneNeighbor} /> */}
        <Route path="/restaurants" render={(props) => {
          return  <Neighborhoods neighborList={this.state.places} {...props} />
        }} />
        <Route path="/restaurants/:neighborhood" render={(props) => {
          return <OneNeighbor neighbors={(this.state.locations)} {...props} />
        }} />
        <Route path="/restaurants/:neighborhood/:menuitems" render={(props) => {
          return <OneRestaurant restaurants={(this.state.restaurants)} {...props} />
        }} />
      </div>
      </Router>
    );
  }
}

export default App;
