import React, { useState, useEffect, useRef } from 'react';
import Header from '../../components/partials/Header';
import SectionExer from '../../components/partials/SectionExer';

const UseRef = props => {
    const [value1, setValue1] = useState('')
    const count = useRef(0);

    useEffect(_ => {
        count.current = count.current + 1
    }, [value1])

    return (
        <div>
            <Header title='Hook UseRef' 
                    subTitle='Retorna um objeto mutável com a propriedade current!' />

            <SectionExer className='center' title='Exercise - #01'>
                <div className="center">
                    <div>
                        <span className="display">Valor: </span>
                        <span className="display">{value1} [</span>
                        <span className="display red">{count.current}</span>
                        <span className='display'>]</span>
                    </div>
                    <input type="text" className="input" onChange={e => setValue1(e.target.value)}/>
                </div>
            </SectionExer>

        </div>
    )
}

export default UseRef;