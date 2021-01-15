import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { reduxForm, Field, formValueSelector } from 'redux-form';

import { init } from '../main/store/actions/billingCycleAction.js';

import Input from '../common/form/labelAndInput.jsx';
import ItemList from './ItemList.jsx';
import Summary from './Summary.jsx';

class BillingCycleForm extends Component {

    constructor(props) {
        super(props)
    }

    calculateSummary() {
        const sum = (accumulator, actualValue) => accumulator + actualValue

        return {
            sumOfCredits: this.props.credits.map(c => +c.value || 0).reduce(sum),

            sumOfDebts: this.props.debts.map(d => +d.value || 0).reduce(sum)
        }
    }

    render() {
        const { handleSubmit, readOnly, credits, debts } = this.props

        const { sumOfCredits, sumOfDebts } = this.calculateSummary()

        return (
            <form role="form" className="form" onSubmit={handleSubmit}>
                <div className="box-body">
                    <Field name='name' component={Input} readOnly={readOnly}
                        label='Nome' cols='12 4' placeholder='Informe o nome' />
                    <Field name='month' component={Input} readOnly={readOnly}
                        label='Mês' cols='12 4' placeholder='Informe o mês' />
                    <Field name='year' component={Input} readOnly={readOnly}
                        label='Ano' cols='12 4' placeholder='Informe o ano' />

                    <Summary credit={sumOfCredits} debt={sumOfDebts}/>

                    <ItemList cols='12 6' list={credits} readOnly={readOnly}
                        field='credits' legend='Créditos' />

                    <ItemList cols='12 6' list={debts} readOnly={readOnly}
                        field='debts' legend='Débitos' test={true}/>
                </div>
                <div className="box-footer">
                    <button type="submit" className={`btn btn-${this.props.submitClass}`}>
                        {this.props.submitLabel}
                    </button>
                    <button type='button' className='btn btn-default' onClick={this.props.init}>
                        Cancelar
                    </button>
                </div>
            </form>
        )
    }
}

BillingCycleForm = reduxForm(
    {
        form: 'billingCycleForm',
        destroyOnUnmount: false
    })(BillingCycleForm);

const selector = formValueSelector('billingCycleForm')

const mapStateToProps = state => {
    return {
        credits: selector(state, 'credits'),
        debts: selector(state, 'debts')
    }
}

const mapDispatchtoProps = dispatch => {
    return bindActionCreators({
        init
    }, dispatch)
}

export default connect(
    mapStateToProps,
    mapDispatchtoProps)(BillingCycleForm);