import React, { useReducer } from 'react';
import Header from '../../components/partials/Header';
import SectionExer from '../../components/partials/SectionExer';

import { reducer, initialState } from '../../store/index';
import { numberAdd2, login } from '../../store/actions/index';


const UseReducer = props => {
    const [state, dispath] = useReducer(reducer, initialState)

    return (
        <div>
            <Header
                title='Hook UseReduce' subTitle='Uma outra forma de ter estados em componentes.' />

            <SectionExer className='center' title='Exercise - #01'>
                <div className="center">
                    <span className="display">{state.number}</span>
                    {state.user.name ? <span className="display">{state.user.name}</span>
                        : <span className="display">Sem usuário</span>}

                    <div className='buttons'>
                        <button className="btn" onClick={_ => numberAdd2(dispath) }>
                            +2
                        </button>
                        <button className="btn" onClick={ _ => login(dispath, 'João') }>
                            Login
                        </button>
                        <button className="btn" onClick={_ => dispath({type: 'mult7'})}>
                            Multiplicar por 7
                        </button>
                        <button className="btn" onClick={_ => dispath({type: 'divid25'})}>
                            Dividir por 25
                        </button>
                        <button className="btn" onClick={_ => dispath({type: 'interger'})}>
                            Tornar inteiro
                        </button>
                        <button className="btn" onClick={_ => dispath({type: 'add10', payload: 10})}>
                            +10
                        </button>
                        <button className="btn" onClick={_ => dispath({type: 'random'})}>
                            Random
                        </button>
                    </div>
                </div>
            </SectionExer>
        </div>
    )
}

export default UseReducer;