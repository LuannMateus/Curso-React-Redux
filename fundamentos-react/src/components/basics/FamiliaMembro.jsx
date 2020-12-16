import React from 'react';

export default props => {
    const {name, lastName} = props

    return (
        <div>
            <span>{name} {lastName}</span> 
        </div>
    )
}