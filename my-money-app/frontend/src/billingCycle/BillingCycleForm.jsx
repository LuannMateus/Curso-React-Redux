import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import Input from '../common/form/labelAndInput.jsx';

class BillingCycleForm extends Component {
    render() {
        const { handleSubmit } = this.props

        return (
            <form role="form" className="form" onSubmit={handleSubmit}>
                <div className="box-body">
                    <Field name='name' component={Input}  
                        label='Nome' cols='12 4' placeholder='Informe o nome'/>
                    <Field name='month' component={Input} 
                        label='Mês' cols='12 4' placeholder='Informe o mês'/>
                    <Field name='year' component={Input} 
                        label='Ano' cols='12 4' placeholder='Informe o ano'/>
                </div>
                <div className="box-footer">
                    <button type="submit" className="btn btn-primary">
                        Submite
                    </button>
                </div>
            </form>
        )
    }
}

export default reduxForm({form: 'billingCycleForm'})(BillingCycleForm);