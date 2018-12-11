import React from 'react';
import {Link} from 'react-router-dom';

const Restaurants = (props) => {
    return (
        <div>
            <h1>FOOD by neighborhood</h1>
            
           
                <ul>
                    <li>
                        <Link to="/restaurants/buckhead">Buckhead</Link>
                    </li>
                    <li>
                        <Link to="/restaurants/decatur">Decatur</Link>
                    </li>
                    <li>
                        <Link to="/restaurants/midtown">Midtown</Link>
                    </li>
                </ul>
            
        </div>
    )
}

export default Restaurants;