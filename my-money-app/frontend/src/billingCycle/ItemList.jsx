import React, { Component } from 'react';
import Grid from '../common/layout/Grid.jsx';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Field, arrayInsert, arrayRemove } from 'redux-form';

import Input from '../common/form/Input.jsx';

import If from '../common/operator/If.jsx';

class ItemList extends Component {

    constructor(props) {
        super(props)

        this.renderRows = this.renderRows.bind(this)
        this.add = this.add.bind(this)
        this.remove = this.remove.bind(this)
    }

    add(index, item = {}) {
        const { field } = this.props

        if (!this.props.readOnly) {
            this.props.arrayInsert('billingCycleForm', field, index, item)
        }
    }

    remove(index) {
        const { field } = this.props

        if (!this.props.readOnly && this.props.list.length > 1) {
            this.props.arrayRemove('billingCycleForm', field, index)
        }
    }

    renderRows() {

        const { field } = this.props

        const list = this.props.list || [];

        return list.map((item, index) => {
            return (
                <tr key={index}>
                    <td>
                        <Field name={`${field}[${index}].name`} component={Input}
                            placeholder='Informe o nome'
                            readOnly={this.props.readOnly}></Field>
                    </td>
                    <td>
                        <Field name={`${field}[${index}].value`} component={Input}
                            placeholder='Informe o valor' readOnly={this.props.readOnly}></Field>
                    </td>

                    <If test={this.props.test}>
                        <td>
                            <Field name={`${field}[${index}].status`} component={Input}
                                placeholder='Informe o valor' readOnly={this.props.readOnly}></Field>
                        </td>
                    </If>

                    <td>
                        <button type='button' className='btn btn-success'
                            onClick={() => this.add(index + 1)}>
                            <i className='fa fa-plus'></i>
                        </button>

                        <button type='button' className='btn btn-warning'
                            onClick={() => this.add(index + 1, item)}>
                            <i className='fa fa-clone'></i>
                        </button>

                        <button type='button' className='btn btn-danger'
                            onClick={() => this.remove(index)}>
                            <i className='fa fa-trash-o'></i>
                        </button>
                    </td>
                </tr>
            )
        })


    }


    render() {
        const { legend } = this.props

        return (
            <Grid cols={this.props.cols}>
                <fieldset >
                    <legend>{legend}</legend>

                    <table className="table">
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Valor</th>
                                <If test={this.props.test}>
                                    <th>Status</th>
                                </If>
                                <th className='table-actions'>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderRows()}
                        </tbody>
                    </table>
                </fieldset>
            </Grid>
        )

    }
}

const mapDispatchToPros = dispatch => {
    return bindActionCreators({
        arrayInsert,
        arrayRemove
    }, dispatch)
}

export default connect(null, mapDispatchToPros)(ItemList);