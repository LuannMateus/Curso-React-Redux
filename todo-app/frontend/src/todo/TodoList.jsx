import React from 'react';
import IconButton from '../templates/IconButton.jsx';

const TodoList = props => {

    const renderRows = _ => {
        const list = props.list || []

        return (
            list.map(todoItem => {
                return (
                    <tr className={todoItem.done ? 'markAsDone' : '' } key={todoItem._id}>
                        <td>{todoItem.description}</td>
                        <td >    
                            <IconButton type='success' icon='check'
                            onClick={_ => props.done(todoItem)} hide={todoItem.done} />

                            <IconButton type='warning' icon='undo'
                            onClick={_ => props.undone(todoItem)} hide={!todoItem.done}/>

                            <IconButton type='danger' icon='trash-o'
                            onClick={_ => props.remove(todoItem)} hide={!todoItem.done}/>
                        </td>
                    </tr>
                )
            })
        )
    }

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th className='tableActions'>Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}

export default TodoList;