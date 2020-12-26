import React, { useState, useMemo } from 'react';
import Header from '../../components/partials/Header';
import SectionExer from '../../components/partials/SectionExer';

function sum(a, b) {
    const future = Date.now() + 2000
    while(Date.now() < future) {}

    return a + b
}

const UseMemo = props => {
    const [n1, setN1] = useState(0);
    const [n2, setN2] = useState(0);
    const [n3, setN3] = useState(0);

    // Usando o useMemo.
    const result = useMemo(_ => sum(n1, n2), [n1, n2])

    /* Solução sem usar o useMemo.
    
    const [result, setResult] = useState(0);

    useEffect(_ => {
        setResult(sum(n1, n2))
    }, [n1 ,n2])*/


    return (
        <div>
            <Header
                title='Hook UseMemo' subTitle='Retorna um valor memorizado!' />

            <SectionExer className='center' title='Exercise - #01'>
                <div className="center">
                    <span className="display">{result}</span>
                    <input type="number" className="input" 
                        onChange={e => setN1(parseInt(e.target.value))}/>
                    <input type="number" className="input" 
                        onChange={e => setN2(parseInt(e.target.value))}/>
                    <input type="number" className="input" 
                        onChange={e => setN3(parseInt(e.target.value))}/>
                </div>
            </SectionExer>
        </div>
    )
}

export default UseMemo;