import React from 'react';
import {Link} from 'react-router-dom';


 const OneNeighbor = (props) => {
    const allFood = props.neighbors;
    const neighborName = props.match.params.neighborhood;
    const neighborFood = allFood[neighborName];
    // console.log(neighborFood)
    const neighborRestListItems= neighborFood.map((rest, index) => {
        return(
            <li className="list-group-item" key={index}>
            <Link to={`restaurants/${neighborName}/${rest}`}>{rest}</Link>
            </li>
        )
    })
    return (
        
        <div>
            <h2>
                {neighborName}
            </h2>
            <ul className="list-group">
                {neighborRestListItems}
            </ul>
        </div>
    )
}
 export default OneNeighbor;