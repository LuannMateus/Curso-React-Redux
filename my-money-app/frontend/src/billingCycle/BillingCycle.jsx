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

import { selectTab, showTabs } from '../main/store/actions/TabActions.js';
import { create } from '../main/store/actions/billingCycleAction.js';
import Form from './BillingCycleForm.jsx';

 
class BillingCycle extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.selectTab('tabList');
        this.props.showTabs('tabList', 'tabCreate')
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
                                <Form onSubmit={this.props.create}/>
                            </TabContent>
                            <TabContent id='tabUpdate'><h1>tabUpdate</h1></TabContent>
                            <TabContent id='tabDelete'><h1>tabDelete</h1></TabContent>
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        )
    }
}


const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        selectTab,
        showTabs,
        create
    }, dispatch)
}

export default connect(
    null,
    mapDispatchToProps)(BillingCycle);