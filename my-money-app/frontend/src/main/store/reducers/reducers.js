import { combineReducers } from 'redux';

import DashboardReducer from '../../../dashboard/dashboardReducer.js';

const rootReducer = combineReducers( {

    dashboard: DashboardReducer

} )

export default rootReducer;

