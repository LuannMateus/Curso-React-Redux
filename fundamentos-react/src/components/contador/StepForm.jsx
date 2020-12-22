import React from 'react';

const StepForm = props => {
    return (
        <div className='input-block'>
            <label htmlFor="step">Step: </label>
            <input id="step" type="number"
                value={props.step}
                onChange={e => props.getStep(+e.target.value)} />
        </div>
    )
} 

export default StepForm;