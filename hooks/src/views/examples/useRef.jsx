import React, { useState, useEffect, useRef } from 'react';
import Header from '../../components/partials/Header';
import SectionExer from '../../components/partials/SectionExer';

function Merge(s1, s2) {
    return [...s1].map((e, i) => `${e}${s2[i] || ''}` )
}

const UseRef = props => {
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');

    const count = useRef(0);
    const myInput1 = useRef(null);
    const myInput2 = useRef(null);

    useEffect(_ => {
        count.current++

        myInput2.current.focus()
    }, [value1])

    useEffect(_ => {
        count.current++

        myInput1.current.focus()
    }, [value2])

    return (
        <div>
            <Header title='Hook UseRef'
                subTitle='Retorna um objeto mutável com a propriedade current!' />

            <SectionExer className='center' title='Exercise - #01'>
                <div className="center">
                    <div>
                        <span className="display">Valor: </span>
                        <span className="display">{Merge(value1, value2)} [</span>
                        <span className="display red">{count.current}</span>
                        <span className='display'>]</span>
                    </div>
                    <input ref={myInput1} type="text" className="input" value={value1} onChange={e => setValue1(e.target.value)} />
                </div>
            </SectionExer>

            <SectionExer className='center' title='Exercise - #02'>
                <div className="center">
                    <input ref={myInput2} type="text" className='input' value={value2} onChange={e => setValue2(e.target.value)} />
                </div>
            </SectionExer>

        </div>
    )
}

export default UseRef;