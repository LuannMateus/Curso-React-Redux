import React, { useState, useCallback } from 'react';
import Header from '../../components/partials/Header';
import SectionExer from '../../components/partials/SectionExer';
import CallbackButtons from './useCallbackButtons';

const UseCallback = props => {
    const [count, setCount] = useState(0);

    
    const inc = useCallback(delta => {
        setCount(curr => curr + delta)
    }, [setCount])

    return (
        <div>
            <Header title='Hook Callback' subTitle='Retorna uma função memorizada!' />

            <SectionExer title='Exercise - #01' >
                <div className="center">
                    <span className="display">{count}</span>
                    <CallbackButtons inc={inc}/>
                </div>
            </SectionExer>
        </div>
    )
}

export default UseCallback;