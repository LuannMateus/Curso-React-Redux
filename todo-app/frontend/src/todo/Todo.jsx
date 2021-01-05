import React, { Component } from 'react';

import PageHeader from '../templates/PageHeader.jsx';
import TodoForm from '../todo/TodoForm.jsx';
import TodoList from '../todo/TodoList.jsx';

class Todo extends Component {

    constructor(props) {
        super(props)

        this.handleClear = this.handleClear.bind(this)
    }

    refresh(description = '') {

        const search = description ? `&description__regex=/${description}/` : ''
        Axios.get(`${URL}?sort=-createdAt${search}`)
            .then(resp => {
                this.props.description 
            })
    }


    handleClear() {
        this.props.handleChange('')
    }

    render() {
        return (
            <div>
                <PageHeader name='Tarefas' small='Cadastro' />

                <TodoForm
                    handleClear={this.handleClear}/>

                <TodoList />
            </div>
        )
    }
}

export default Todo;