import React from 'react';
import {Link} from 'react-router-dom';

const Restaurants = (props) => {
    const neighborList = props.neighborList.map(neighborName => {
        return (
            <li>
                <Link to={`/restaurants/${neighborName}`}>{neighborName}</Link>
            </li>
        )
    });
    return (
        <div>
            <h1>FOOD by neighborhood</h1>
            
           
                <ul>
                    {/* <li>
                        <Link to="/restaurants/buckhead">Buckhead</Link>
                    </li>
                    <li>
                        <Link to="/restaurants/decatur">Decatur</Link>
                    </li>
                    <li>
                        <Link to="/restaurants/midtown">Midtown</Link>
                    </li> */}
                    {neighborList}
                </ul>
            
        </div>
    )
}

export default Restaurants;