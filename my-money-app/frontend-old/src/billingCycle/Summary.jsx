import React, { Component } from 'react';

import Row from '../common/layout/Row.jsx';
import Grid from '../common/layout/Grid.jsx';
import ValueBox from '../common/widget/ValueBox.jsx';

const Summary = ({ credit, debt }) => {

    return (
        <Grid cols='12'>
            <fieldset>
                <legend>Resumo</legend>
                <Row>
                    <ValueBox cols='12 4' color='green' icon='bank'
                        value={`R$ ${credit}`} text='Total de Créditos' />
                    <ValueBox cols='12 4' color='red' icon='credit-card'
                        value={`R$ ${debt}`} text='Total de Débitos' />
                    <ValueBox cols='12 4' color='blue' icon='money'
                        value={`R$ ${credit - debt}`} text='Valor Consolidado' />
                </Row>
            </fieldset>
        </Grid>
    )

}

export default Summary;