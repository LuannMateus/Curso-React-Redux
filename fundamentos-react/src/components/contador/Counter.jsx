import React, { Component } from 'react';
import './Counter.css'
import Buttons from './Buttons';
import Display from './Display';
import StepForm from './StepForm';

class Counter extends Component {

    state = {
        number: this.props.number,
        step: this.props.step
    }

    inc = _ => {
        this.setState({
            number: this.state.number + this.state.step
        })
    }

    dec = _ => {
        this.setState({
            number: this.state.number - this.state.step
        })
    }

    step = newStep => {
        this.setState({
            number: this.state.number,
            step: newStep
        })
    }

    render() {
        return (
            <div className='Counter'>
                <h1>Counter</h1>
               <Display number={this.state.number}/>

                <StepForm step={this.state.step} getStep={this.step}/>
                <Buttons inc={this.inc} dec={this.dec}/>
            </div>  
        )
    }
}

export default Counter;