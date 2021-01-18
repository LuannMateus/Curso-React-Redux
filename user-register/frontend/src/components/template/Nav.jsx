import React from 'react';
import './Nav.css';
import NavItem from './NavItem';

export default props => {
    return (
        <aside className="menu-area">
            <nav className="menu">
                <NavItem link='/' font='fa fa-home' name='Inicio'/>
                <NavItem link='/users' font='fa fa-users' name='Usuários'/>
            </nav>
        </aside>
    )
}
