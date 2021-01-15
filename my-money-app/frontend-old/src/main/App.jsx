import React from 'react';

import Header from '../common/templates/Header.jsx';
import SideBar from '../common/templates/SideBar.jsx';
import Footer from '../common/templates/Footer.jsx';
import Routes from './Routes.jsx';
import Messages from '../common/msg/Messages.jsx';


const App = props => {
    return (
        <div className="wrapper">
            <Header />
            <SideBar />
            <div className="content-wrapper">
                <Routes />
            </div>
            <Footer />
            <Messages />
        </div>
    )
}

export default App;