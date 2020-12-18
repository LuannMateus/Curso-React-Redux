import React from 'react';
import DiretaFilho from './DiretaFilho';

const PaiComunication = props => {
    return (
        <div>
            <DiretaFilho name='Junior' age={20} nerd={true}/>
            <DiretaFilho name='Gabriel' age={17} nerd={false}/>
        </div>
    )
}

export default PaiComunication;