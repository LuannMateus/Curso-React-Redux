import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


import ContentHeader from '../common/templates/ContentHeader.jsx';
import Content from '../common/templates/Content.jsx';

import Tabs from '../common/tab/Tabs.jsx';
import TabsHeader from '../common/tab/TabsHeader.jsx';
import TabsContent from '../common/tab/TabsContent.jsx';

import TabHeader from '../common/tab/TabHeader.jsx'
import TabContent from '../common/tab/TabContent.jsx';

import List from './BillingCycleList.jsx';

import { init, create, update, remove } from '../main/store/actions/billingCycleAction.js';
import Form from './BillingCycleForm.jsx';

 
class BillingCycle extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.init()
    }

    render() {
        return (
            <div>
                <ContentHeader title='Ciclos de Pagamentos' subTitle='Cadastro'/>
                <Content>
                    <Tabs>
                        <TabsHeader>
                            <TabHeader label='Listar' icon='bars' target='tabList'/>
                            <TabHeader label='Incluir' icon='plus' target='tabCreate'/>
                            <TabHeader label='Alterar' icon='pencil' target='tabUpdate'/>
                            <TabHeader label='Excluir' icon='trash-o' target='tabDelete'/>
                        </TabsHeader>
                        <TabsContent>
                            <TabContent id='tabList'>
                                <List />
                            </TabContent>
                            <TabContent id='tabCreate'>
                                <Form onSubmit={this.props.create} 
                                    submitLabel='Incluir' submitClass='primary'/>
                            </TabContent>
                            <TabContent id='tabUpdate'>
                                <Form onSubmit={this.props.update}
                                    submitLabel='Alterar' submitClass='info'/>
                            </TabContent>
                            <TabContent id='tabDelete'>
                                <Form onSubmit={this.props.remove} readOnly={true}
                                    submitLabel='Excluir' submitClass='danger'/>
                            </TabContent>
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        )
    }
}


const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        create,
        update,
        remove,
        init
    }, dispatch)
}

export default connect(
    null,
    mapDispatchToProps)(BillingCycle);