import React, { useState } from 'react';
import IndiretaFilho from './IndiretaFilho';

const PaiIndireto = props => {

    // Usando um Destructuring para pegar o valor inicial e a função de modificação.
    const [name, setName] = useState('?');
    const [age, setAge] = useState(0);
    const [nerd, setNerd] = useState(false);


    // Criando a função para receber as propridades do filho e usando o useState para modificar os valores.
    function getChildProps(name, age, nerd) {
        setName(name)
        setAge(age)
        setNerd(nerd)
    };

    return (
        <div>
            <div>
                <span> {name} </span>
                <span> <strong> {age} </strong> </span>
                <span> {nerd ? 'Verdadeiro' : 'Falso' } </span>
            </div>
            {/* Passando a função como propriedade*/}
            <IndiretaFilho getChildProps={getChildProps} />
        </div>
    )
}

export default PaiIndireto;