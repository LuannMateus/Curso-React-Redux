import React, { Component } from 'react';

import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';

import { getSummary } from '../main/store/actions/dashBoardActions.js';

import ContentHeader from '../common/templates/ContentHeader.jsx';
import Content from '../common/templates/Content.jsx';
import ValueBox from '../common/widget/ValueBox.jsx';
import Row from '../common/layout/Row.jsx';


class Dashboard extends Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.getSummary()
    }

    render() {
        const { credit, debt } = this.props.summary

        return (
            <div>
                <ContentHeader title='Dashboard' subTitle='Versão 1.0' />
                <Content>
                    <Row>
                        <ValueBox cols='12 4' color='green' icon='bank'
                            value={`R$ ${credit}`} text='Total de Créditos.' />

                        <ValueBox cols='12 4' color='red' icon='credit-card'
                            value={`R$ ${debt}`} text='Total de Débitos.' />

                        <ValueBox cols='12 4' color='blue' icon='money'
                            value={`R$ ${credit - debt}`} text='Valor Consolidado.' />
                    </Row>
                </Content>
            </div>
        )
    }

};

const mapStateToProps = state => {
    return {
        summary: state.dashboard.summary
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        getSummary
    }, dispatch)
}

export default connect(
    mapStateToProps,
    mapDispatchToProps)(Dashboard);