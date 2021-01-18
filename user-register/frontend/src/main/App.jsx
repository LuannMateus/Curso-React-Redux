import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

// HashRouter usado para permitir a navegação do Routes.
// import { HashRouter } from 'react-router-dom';

// Permite a navegação entre Router sem o #.
import { BrowserRouter } from 'react-router-dom';

import Logo from '../components/template/Logo';
import Nav from '../components/template/Nav';
import Routes from './Routes';
import Footer from '../components/template/Footer';

export default props => {
    return (
        <BrowserRouter>
            <div className="app">
                <Logo />
                <Nav />
                <Routes />
                <Footer />
            </div>
        </BrowserRouter>

    )
}

