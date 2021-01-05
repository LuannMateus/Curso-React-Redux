import React from 'react';

import PageHeader from '../templates/PageHeader.jsx';
import TodoForm from '../todo/TodoForm.jsx';
import TodoList from '../todo/TodoList.jsx';

const Todo = props => {
    return (
        <div>
            <PageHeader name='Tarefas' small='Cadastro' />

            <TodoForm />

            <TodoList />
        </div>
    )
}

export default Todo;