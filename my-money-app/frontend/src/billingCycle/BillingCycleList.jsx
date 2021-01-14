import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getList } from '../main/store/actions/billingCycleAction.js';

class BillingCycleList extends Component {

    constructor(props) {
        super(props)

        this.renderRows = this.renderRows.bind(this)
    }

    componentDidMount() {
        this.props.getList()
    }

    renderRows() {

        const list = this.props.list || []
        
        return list.map(bc => {
            return (
                <tr key={bc._id}>
                    <th>{bc.name}</th>
                    <th>{bc.month}</th>
                    <th>{bc.year}</th>
                </tr>
            )
        })
    }

    render() {
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Mês</th>
                            <th>Ano</th>
                        </tr>

                    </thead>
                    <tbody>
                        {this.renderRows()}
                    </tbody>
                </table>
            </div>

        )
    }
}

const mapStateToProps = state => {
    return {
        list: state.billingCycle.list
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        getList
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleList);