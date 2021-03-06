import React from 'react';

import MenuItem from './MenuItem.jsx';
import MenuTree from './MenuTree.jsx';

const Menu = props => {
    return (
        <ul className="sidebar-menu">
            <MenuItem path='/' label='Dashboard' icon='dashboard' />
            <MenuTree label='Cadastro' icon='edit'>
                <MenuItem path='/billingCyles' 
                    label='Ciclos de Pagamentos' icon='usd'/>
            </MenuTree>
        </ul>
    )

}

export default Menu;