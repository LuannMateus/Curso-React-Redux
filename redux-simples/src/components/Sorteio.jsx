import React from 'react';
import { connect } from 'react-redux';

import './Intervalo.css';

import Card from '../components/Card';

const Sorteio = props => {
    const { min, max } = props

    return (
        <Card title='Sorteio de um Número' green>
            <div>
                <span>
                    <span>Resultado: </span>
                    <strong>{
                        parseInt(Math.random() * (max - min ) + min)
                    }</strong>
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

export default connect(mapStateToProps)(Sorteio);