import React, { useState } from 'react';
import Header from '../../components/partials/Header';
import SectionExer from '../../components/partials/SectionExer';

const UseState = props => {

    const [countValue, setCount] = useState(0);
    const [name, setName] = useState('');

    return (
        <div>
            <Header title='Hook UseState'
                subTitle='Estado em componentes funcionais!'
            />
            <SectionExer title='Exercise #01 - Counter'>
                <div className='center'>
                    <h1 className='display'>{countValue}</h1>
                    <div className="buttons" >
                        <button className='btn'
                        onClick={_ => setCount(countValue + 1)}>+</button>
                        <button className='btn'
                        onClick={_ => setCount(countValue - 1)}>-</button>
                        <button className='btn'
                        onClick={_ => setCount(current => current + 1000)}>+1000</button>
                    </div>
                </div>
            </SectionExer>

            <SectionExer title='Exercise - #02'>
                <div className='center'>
                    <h1 className='display'>{name ? name : 'Empty'}</h1>
                    <input className='input' type="text" value={name} onChange={e => setName(e.target.value)}/>
                </div>
            </SectionExer>
        </div>
    )
}

export default UseState;