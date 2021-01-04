import React, { Component } from 'react';
import Axios from 'axios';

import PageHeader from '../templates/PageHeader.jsx';
import TodoForm from '../todo/TodoForm.jsx';
import TodoList from '../todo/TodoList.jsx';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Actions Creators
import { handleChange, handleAddTodo } from '../main/store/actions/todoAction.js';

const URL = 'http://localhost:3003/api/todos'

class Todo extends Component {

    constructor(props) {
        super(props)

        this.handleAdd = this.handleAdd.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.handleMarkAsDone = this.handleMarkAsDone.bind(this)
        this.handleMarkAsPending = this.handleMarkAsPending.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.handleClear = this.handleClear.bind(this)

        this.refresh()
    }

    refresh(description = '') {

        const search = description ? `&description__regex=/${description}/` : ''
        Axios.get(`${URL}?sort=-createdAt${search}`)
            .then(resp => {
                this.props.handleAddTodo(resp.data),
                this.props.description 
            })
    }


    handleSearch() {
        this.refresh(this.props.description)
    }

    handleAdd() {
        const description = this.props.description
        Axios.post(URL, { description })
            .then(resp => this.refresh())
    }

    handleDelete(todo) {
        Axios.delete(`${URL}/${todo._id}`)
            .then(_ => this.refresh(this.props.description))
    }

    handleMarkAsDone(todo) {
        Axios.put(`${URL}/${todo._id}`, { ...todo, done: true })
            .then(_ => this.refresh(this.props.description))
    }

    handleMarkAsPending(todo) {
        Axios.put(`${URL}/${todo._id}`, { ...todo, done: false })
            .then(_ => this.refresh(this.props.description))
    }

    handleClear() {
        this.props.handleChange('')
    }

    render() {
        return (
            <div>
                <PageHeader name='Tarefas' small='Cadastro' />

                <TodoForm
                    handleAdd={this.handleAdd}
                    handleSearch={this.handleSearch}
                    handleClear={this.handleClear}
                />

                <TodoList
                    list={this.props.list}
                    done={this.handleMarkAsDone}
                    undone={this.handleMarkAsPending}
                    remove={this.handleDelete}
                />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        description: state.todo.description,
        list: state.todo.list
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ handleChange, handleAddTodo }, dispatch)
}

export default connect(
    mapStateToProps, 
    mapDispatchToProps)(Todo);