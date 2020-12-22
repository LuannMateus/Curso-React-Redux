import React, { Component } from 'react';
import generationNumbers from './NumberGeneration';
import './MegaSena.css';


class MegaSena extends Component {

    state = {
        value: 'Empty',
        total: 0
    }

    total = e => {
        this.setState({
            total: e.target.value
        })
    }

    MegaNumber = e => {
        const number = generationNumbers(this.state.total)

        let formatArray = number.map((item, i) => {
            /*return i + 1 !== number.length ? item + ' ' : item*/
            return <span className='sorted-number' key={i}> {item} </span>
        })

        this.setState({
            value: formatArray
        })
    }

    render() {
        return (
            <div className='mega-sena'>
                <h1>Gerador de números da Mega Sena</h1>
                <h2>{this.state.value}</h2>
                <div className='input-block'>
                    <label htmlFor="total">Quantas sequências: </label>
                    <input type="number" value={this.state.total}
                        onChange={this.total} onClick={this.MegaNumber} max='12' min='1'/>
                </div>
                <button onClick={this.MegaNumber}>Generation</button>
            </div >
        )
    }

}

export default MegaSena;