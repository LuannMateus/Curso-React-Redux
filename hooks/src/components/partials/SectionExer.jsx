import React from 'react';
import './SectionExer.css';

const SectionExer = props => {
    return (
        <section className="SectionExer">
            <h1 className='title'>{props.title}</h1>
            {props.children}
        </section>
    )

}

export default SectionExer;