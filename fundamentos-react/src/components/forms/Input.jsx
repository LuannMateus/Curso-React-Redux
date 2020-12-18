import React, { useState } from 'react';
import './Input.css';

const Form = props => {
    const [value, setState] = useState('Initial');

    function changeValue(e) {
        setState(e.target.value)
    }

    return (
        <div>
            <h1>{value ? value : 'Initial'}</h1 >
            <div className='form'>
                {/*Componente Controlado*/}
                <h2>Componente Controlado</h2>
                <input type="text" value={value} onChange={changeValue} />

                {/* Componente de apenas leitura */}
                <h2>Componente de apenas leitura</h2>
                <input type="text" value={value} readOnly />

                {/*Componente Não Controlado*/}
                <h2>Componente Não Controlado</h2>
                <input type="text" value={undefined} />
            </div>
        </div>
    )
}

export default Form;