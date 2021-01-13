import React from 'react';
import Menu from './Menu.jsx';

const SideBar = props => {
    return (
        <aside className="main-sidebar">
            <section className="sidebar">
                <Menu />
            </section>
        </aside>
    )
}

export default SideBar;