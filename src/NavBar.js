import React from 'react';
import {
    Link
} from 'react-router-dom';

const NavBar = (props) => {
    return (
        <div className="navbar">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              {/* <li><Link to="/restaurants">Restuarants</Link></li> */}
            <li>
            <Link to="/restaurants/">Restaurants</Link>
                
            </li>
            
            </ul>
        </div>
    )
}

export default NavBar;