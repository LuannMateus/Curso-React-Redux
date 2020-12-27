import React, { useContext } from 'react';
import Header from '../../components/partials/Header';
import SectionExer from '../../components/partials/SectionExer';

import DataContext from '../../data/DataContext';
import { AppContext } from '../../data/Store';

const UseContext = props => {

    const { state, setState } = useContext(DataContext)

    const addNumber = delta => {
        setState({
            ...state,
            number: state.number + delta
        })
    }

    const {number, text, setNumber} = useContext(AppContext)

    return (
        <div>
            <Header title='Hook UseContext' subTitle='Aceita um objeto de contexto e retorna o valor atual do contexto!' />

            <SectionExer title='Exercise - #01' >

                <div className="center">
                    <span className="display">{state.text}</span>
                    <span className="display">{state.number}</span>
                    <div className='buttons'>
                        <button className="btn"
                            onClick={_ => addNumber(1)}>+1</button>
                        <button className="btn"
                            onClick={_ => addNumber(-1)}>-1</button>
                    </div>
                </div>

            </SectionExer>

            <SectionExer title='Exercise - #01' >
                <div className="center">
                    <span className="display">{text}</span>
                    <span className="display">{number}</span>
                    <div className='buttons'>
                        <button className="btn"
                            onClick={_ => setNumber(+1)}>+1</button>
                        <button className="btn"
                            onClick={_ => setNumber(-1)}>-1</button>
                    </div>
                </div>
            </SectionExer>
        </div>
    )
}

export default UseContext;