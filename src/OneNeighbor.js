import React from 'react';
import {Link} from 'react-router-dom';


 const OneNeighbor = (props) => {
    const allFood = props.neighbors;
    const neighborName = props.match.params.neighborhood;
    const neighborFood = allFood[neighborName];
    console.log(neighborFood)
    const neighborRestListItems= Object.keys(neighborFood).map(rest => {
        return(
            <li>
            <Link to={`restaurants/${neighborName}/${rest}`}>{rest}</Link>
            </li>
        )
    })
    return (
        // <h2>
        //     {props.match.params.neighborhood}
        // </h2>
        <div>
            <h2>
                {neighborName}
            </h2>
            <ul>
                {neighborRestListItems}
            </ul>
        </div>
    )
}
 export default OneNeighbor;