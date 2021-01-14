import React from 'react';
import { Router, Route, Redirect, hashHistory} from 'react-router';

import Dashboard from '../dashboard/Dashboard.jsx';
import BillingCycle from '../billingCycle/BillingCycle.jsx';

const Routes = props => {
    return (
        <Router history={hashHistory}>
            <Route path='/' component={Dashboard} />

            <Route path='/billingCyles' component={BillingCycle}/>

            <Redirect from='*' to='/'/>
        </Router>
    )
}

export default Routes;