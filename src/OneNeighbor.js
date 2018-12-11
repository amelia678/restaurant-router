import React from 'react';

const OneNeighbor = (props) => {
    const allFood = props.neighbors;
    const neighborName = props.match.params.neighborhood;
    const neighborFood = allFood[neighborName];
    return (
        // <h2>
        //     {props.match.params.neighborhood}
        // </h2>
        <div>
            <h2>
                {neighborName}
            </h2>
            <ul>
                {neighborFood.map((rest) => {
                    return <li>{rest}</li>
                })}
            </ul>
        </div>
    )
}

export default OneNeighbor;