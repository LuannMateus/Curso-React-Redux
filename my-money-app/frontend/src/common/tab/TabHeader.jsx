import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { selectTab } from '../../main/store/actions/TabActions.js';
import If from '../operator/If.jsx';

class TabHeader extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        const selected = this.props.tab.selected === this.props.target;
        const visible = this.props.tab.visible[this.props.target];
        return (
            <If test={visible}>

                <li className={selected ? 'active' : ''}>
                    <a href='javascript:;'
                        data-toggle='tab'
                        data-target={this.props.target}
                        onClick={() => this.props.selectTab(this.props.target)}>
                        <i className={`fa fa-${this.props.icon}`}></i> {this.props.label}
                    </a>
                </li>

            </If>
        )
    }
}

const mapStateToProps = state => {
    return {
        tab: state.tab
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        selectTab
    }, dispatch)
}

export default connect(
    mapStateToProps,
    mapDispatchToProps)(TabHeader);