import React, { Component } from 'react';
import Axios from 'axios';

import PageHeader from '../templates/PageHeader.jsx';
import TodoForm from '../todo/TodoForm.jsx';
import TodoList from '../todo/TodoList.jsx';



const URL = 'http://localhost:3003/api/todos'

class Todo extends Component {

    constructor(props) {
        super(props)

        this.state = { description: '', list: [] }

        this.handleAdd = this.handleAdd.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.handleMarkAsDone = this.handleMarkAsDone.bind(this)
        this.handleMarkAsPending = this.handleMarkAsPending.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.handleClear = this.handleClear.bind(this)

        this.refresh()
    }

    refresh(description = '') {
        const search = description ? `&description__regex=/${description}/` : ''
        console.log(search)
        Axios.get(`${URL}?sort=-createdAt${search}`)
            .then(resp => this.setState({ ...this.state, description, list: resp.data }))
    }

    handleChange(e) {
        const newValue = e.target.value
        this.setState({ ...this.state, description: newValue })
    }

    handleSearch() {
        this.refresh(this.state.description)
    }

    handleAdd() {
        const description = this.state.description
        Axios.post(URL, { description })
            .then(resp => this.refresh())
    }

    handleDelete(todo) {
        Axios.delete(`${URL}/${todo._id}`)
            .then(resp => this.refresh(this.state.description))
    }

    handleMarkAsDone(todo) {
        Axios.put(`${URL}/${todo._id}`, { ...todo, done: true })
            .then(_ => this.refresh(this.state.description))
    }

    handleMarkAsPending(todo) {
        Axios.put(`${URL}/${todo._id}`, { ...todo, done: false })
            .then(_ => this.refresh(this.state.description))
    }

    handleClear() {
        this.refresh()
    }

    render() {
        return (
            <div>
                <PageHeader name='Tarefas' small='Cadastro' />

                <TodoForm
                    description={this.state.description}
                    handleAdd={this.handleAdd}
                    handleChange={this.handleChange}
                    handleSearch={this.handleSearch}
                    handleClear={this.handleClear}
                />

                <TodoList
                    list={this.state.list}
                    done={this.handleMarkAsDone}
                    undone={this.handleMarkAsPending}
                    remove={this.handleDelete}
                />
            </div>
        )
    }
}

export default Todo;