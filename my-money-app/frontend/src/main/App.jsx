import React from 'react';

import { HashRouter } from 'react-router-dom';

import Header from '../common/templates/Header.jsx';
import SideBar from '../common/templates/SideBar.jsx';
import Footer from '../common/templates/Footer.jsx';
import Routes from './Routes.jsx';
import Messages from '../common/msg/Messages.jsx';

const App = props => {


    return (
        <HashRouter>
            <div className="wrapper">
                <Header />
                <SideBar />
                <Routes />
                <Footer />
                <Messages />
            </div>
        </HashRouter>

    )
}

export default App;