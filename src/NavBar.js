import React from 'react';
import {
    Link
} from 'react-router-dom';

const NavBar = (props) => {
    return (
        <div className="navbar">
            <ul className="nav">
              <li className="nav-item"><Link to="/">Home</Link></li> 
              <br></br>
              <li className="nav-item"><Link to="/about">About</Link></li> 
              
            <li className="nav-item"><Link to="/restaurants/">Restaurants</Link></li>
            </ul>
        </div>
    )
}

export default NavBar;