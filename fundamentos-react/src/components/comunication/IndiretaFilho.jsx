import React from 'react';

const FilhoIndireto = props => {
    const max = 110
    const min = 0
    const age = _ => parseInt(Math.random() * (max - min) + min)
    const generateNerd = _ => Math.random() > 0.5


    // Colocando por meio das props a função dentro de uma constante.
    const PushChildInfo = props.getChildProps

    return (
        <div>
            {/* Associando um evento de click, passando os valores como parâmetro. */}
            <button onClick={_ => PushChildInfo('João', age(), generateNerd())}>
                Pull Informations
            </button>
        </div>
    )
}

export default FilhoIndireto;