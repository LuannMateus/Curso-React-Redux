import React, { useState, useEffect } from 'react';
import Header from '../../components/partials/Header';
import SectionExer from '../../components/partials/SectionExer';


function calcFatorial(num) {
    const n = parseInt(num);

    if (n < 0) return -1
    if (n === 0) return 1

    return calcFatorial(n - 1) * n
}

function evenOrOdd(number) {
    const n = parseInt(number);

    if (n <= 0) 
        return -1

    if (n % 2 === 0)
        return 'Even'
    else
        return 'Odd'

}

const UseEffect = props => {
    const [number, setNumber] = useState(1);
    const [fatorial, setFatorial] = useState(1);
    const [evenOdd, setEvenOdd] = useState('');

    useEffect(_ => {
        setFatorial(calcFatorial(number))
    }, [number])

    useEffect(_ => {
        if (fatorial > 100000)
            document.title = 'Eita!!!'
    }, [fatorial])

    useEffect(_ => {
        setEvenOdd(evenOrOdd(number))
    }, [number])

    return (
        <div>
            <Header title='Hook UseEffect'
                subTitle='Permite executar efeitos colaterais em componentes funcionais!'
            />

            <SectionExer className='center' title='Exercise - #01'>
                <div className="center">
                    <div>
                        <span className='display'>Fatorial: </span>
                        <span className='display red'>{fatorial > -1 ? fatorial : 'Does not exist'}</span>
                    </div>

                    <input
                        type="number" className="input"
                        value={number} onChange={e => setNumber(e.target.value)} />
                </div>

            </SectionExer>

            <SectionExer className='center' title='Exercise - #02'>
                <div className="center">
                    <div>
                        <span className='display'>Status: </span>
                        <span className='display red'>{evenOdd === -1 ? 'Does not exists' : evenOdd}</span>
                    </div>
                </div>
            </SectionExer>
        </div>

    )
}

export default UseEffect;