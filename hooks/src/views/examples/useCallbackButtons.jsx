import React from 'react';

const CallbackButtons = props => {
    console.log('...')

    return (
        <div>
            <button className="btn"
                onClick={_ => props.inc(6)}>+6</button>
            <button className="btn"
                onClick={_ => props.inc(12)}>+12</button>
            <button className="btn"
                onClick={_ => props.inc(18)}>+18</button>
        </div>
    )
}

export default React.memo(CallbackButtons);