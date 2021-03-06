import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import If from '../operator/If';


class TabContent extends Component {


    render() {
        const selected = this.props.tab.selected === this.props.id;
        const visible = this.props.tab.visible[this.props.id];

        return (
            <If test={visible}>

                <div id={this.props.id}
                    className={`tab-pane ${selected ? 'active' : ''}`}>
                    {this.props.children}
                </div>

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

    }, dispatch)
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TabContent);