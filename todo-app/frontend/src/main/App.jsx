import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'modules/font-awesome/css/font-awesome.min.css';

import React from 'react';

import Menu from '../templates/Menu.jsx';
import Routes from '../main/Routes.jsx';

export default props => {
    return (
        <div className="container">
            <Menu />
            <Routes />
        </div>
    )
}