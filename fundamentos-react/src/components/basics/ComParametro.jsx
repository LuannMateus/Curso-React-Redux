import React from 'react';

export default function ComParametros(props) {

    const status = props.grade >= 7 ? 'Aprovado' : 'em Recuperação'

    return (
        <div>
            <h2> {props.title} </h2>
            <p>
                <strong> {props.student} </strong>
                tem nota
                <strong> { props.grade } </strong>
                e sua situação está {status}!
            </p>
        </div>
    )
}