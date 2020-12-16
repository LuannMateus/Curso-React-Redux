import React from 'react';

import Alunos from '../../data/alunos';

const listaAlunos = props => {
    const alunoItem = Alunos.map(aluno => {
        return (
            <li key={aluno.id}>
                {aluno.id} - {aluno.nome} : {aluno.nota}
            </li>
        )
    })

    return (
        <div>
            <ul style={{ listStyle: 'none' }}>
                {alunoItem}
            </ul>
        </div>
    )
}

export default listaAlunos