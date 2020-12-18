import React from 'react';


const FilhoComunication = props => {
    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <span> Nome: {props.name} </span>
            <span> Age: {props.age} </span>
            <span> Nerd: {props.nerd ? 'Verdadeiro' : 'Falso'}! </span>
            <hr/>
        </div>
    )
}

export default FilhoComunication;