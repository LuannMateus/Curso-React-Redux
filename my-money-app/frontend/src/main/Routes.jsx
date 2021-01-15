import React from 'react';

import { Switch, Route, Redirect } from 'react-router';

import Dashboard from '../dashboard/Dashboard.jsx';
import BillingCycle from '../billingCycle/BillingCycle.jsx';

const Routes = props => {
    return (
        <div className="content-wrapper">
            <Switch>
                <Route exact path='/' component={Dashboard} />

                <Route path='/billingCyles' component={BillingCycle} />

                <Redirect from='*' to='/' />
            </Switch>

        </div>

    )
}

export default Routes;