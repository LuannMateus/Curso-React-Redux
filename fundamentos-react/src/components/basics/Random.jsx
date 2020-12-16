import React from 'react';

export default props => {
    const {min, max} = props

    const choice = parseInt((Math.random() * (max - min)) + min);

    return (
        
        <div className="random">
            <h1>Random Values</h1>
            <h2>Min Value: {props.min}</h2>
            <h2>Max Value: {props.max}</h2>
            <p>Random: { choice }</p>
        </div>
       
    )
}