import React from 'react';
import {Link} from 'react-router-dom';

const Neighborhoods = (props) => {
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
                    
                    {neighborList}
                </ul>
            
        </div>
    )
}

export default Neighborhoods;