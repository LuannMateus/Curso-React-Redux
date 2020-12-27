import React from 'react';
import Header from '../../components/partials/Header';
import SectionExer from '../../components/partials/SectionExer';

import useCount from '../../hooks/useCount';
import {useFetch} from '../../hooks/useFetch';


const UsePersonalHook = props => {

    const [count, inc, dec] = useCount()

    const url = 'http://files.cod3r.com.br/curso-react/estados.json';

    const response = useFetch(url)

    function showStates(states) {
        return states.map(state => {
            return <li>{state.nome} - {state.sigla}</li>
        })
    }

    return (
        <div>
            <Header
                title='Hook UseReduce' subTitle='Uma outra forma de ter estados em componentes.' />
             <SectionExer className='center' title='Exercise - #01'>
                 <div className="center">
                    <span className="display">{count}</span>
                    <div className="buttons">
                        <button className="btn"
                        onClick={_ => inc()}>+1</button>
                        <button className="btn"
                        onClick={_ => dec()}>-1</button>
                    </div>
                 </div>
             </SectionExer>

             <SectionExer className='center' title='Exercise - #02'>
                 <div className="center">
                        <ul>
                            {response.data ? showStates(response.data) : 'Não existe!'}
                        </ul>
                 </div>
             </SectionExer>
        </div>

    )

}

export default UsePersonalHook;