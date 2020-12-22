import React from 'react';
import './Header.css';

const Header = props => {
    return (
        <header className='Title' 
            style={{backgroundColor: props.color, borderColor: props.borderColor}}>
            <h1>{props.title}</h1>
            <h2>{props.subTitle}</h2>
        </header>
    )
}

export default Header;