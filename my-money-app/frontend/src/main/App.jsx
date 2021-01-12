import React from 'react';
import '../common/dependencies.js';
import Header from '../templates/Header.jsx';
import SideBar from '../templates/SideBar.jsx';
import Footer from '../templates/Footer.jsx';


const App = props => {
    return (
        <div className="wrapper">
            <Header />
            <SideBar />
            <div className="content-wrapper">
                <h1>Conteúdo</h1>
            </div>
            <Footer />
        </div>
    )
}

export default App;