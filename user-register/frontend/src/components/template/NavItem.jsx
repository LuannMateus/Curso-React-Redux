import React from 'react';
// Usado para substituir do <a> para navegar entre links.
import { Link } from 'react-router-dom';


export default props => {
    return (
        <Link to={props.link}>
            <i className={props.font}></i> {props.name}
        </Link>
    )
}