import React from 'react';

import If from '../templates/If.jsx';

const IconButton = props => {
    return (
        <If test={!props.hide} >
            <button className={'btn btn-' + props.type}
                onClick={props.onClick}>
                <i className={'fa fa-' + props.icon}></i>
            </button>
        </If>
    )
}

export default IconButton;