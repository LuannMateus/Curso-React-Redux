import React from 'react';


import './Intervalo.css';

import Card from '../components/Card';

import { connect } from 'react-redux';
import { alterarNumeroMinimo, alterarNumeroMaximo } from '../store/actions/numerosAction';


const Intervalo = props => {
    const { min, max } = props

    return (
        <Card title='Intervalo de Números' red>
            <div className="Intervalo">
                <span>
                    <strong>Mínimo:</strong>
                    <input type="number" 
                        value={min} 
                        onChange={e => props.alterarMin(e.target.value)}
                        max={max}/>
                </span>

                <span>
                    <strong>Máximo:</strong>
                    <input type="number" 
                        value={max} 
                        onChange={e => props.alterarMax(e.target.value)}
                        min={min}/>
                </span>
            </div>
        </Card>
    )
}

const mapStateToProps = state => {
    return {
        min: state.numeros.min,
        max: state.numeros.max
    }
}

const mapDispatchToProps = dispath => {
    return {
        alterarMin(newValue) {

            // action creator -> action
            const action = alterarNumeroMinimo(newValue)
            dispath(action)
        },
        alterarMax(newValue) {
            const action = alterarNumeroMaximo(newValue)
            dispath(action)
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Intervalo);