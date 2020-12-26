import React, { useReducer } from 'react';
import Header from '../../components/partials/Header';
import SectionExer from '../../components/partials/SectionExer';

const initialState = {
    cart: [],
    products: [],
    user: {},
    number: 0
}

function reducer(state, action) {
    switch(action.type) {
        case 'numberAdd2':
            return {...state, number: state.number + 2}
        case 'login':
            return {...state, user: {name: action.payload }}
        default:
            return state
    }
}

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
                    <div>
                        <button className="btn" onClick={_ => dispath({type: 'numberAdd2'})}>
                            +2
                        </button>
                        <button className="btn" onClick={_ => dispath({type: 'login', payload: 'Maria'})}>
                            Login
                        </button>
                    </div>
                </div>
            </SectionExer>
        </div>
    )
}

export default UseReducer;