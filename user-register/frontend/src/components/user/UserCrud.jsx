import React, { Component } from 'react';
import axios from 'axios';
import Main from '../template/Main';

import './Buttons.css'

const headerProps = {
    icon: 'users',
    title: 'Usuários',
    subtitle: 'Cadastro de usuários: Incluir, Lista, Alterar e Excluir'
}


// Defnindo a URL do backend
const baseUrl = 'http://localhost:3001/users';

// Definindo o estado inicial do formulário
const initialState = {
    user: {
        name: '',
        email: ''
    },
    list: []
}

export default class UserCrud extends Component {
    // Inicializando o state
    state = { ...initialState }

    componentWillMount() {
        axios(baseUrl)
            .then(resp => {
                this.setState({ list: resp.data })
            })
    }

    // Função criada para limpar o user do formulário
    clear() {
        this.setState({ user: initialState.user })
    }

    // Salvando o usuário no banco de dados usando POST ou PUT.
    save() {

        const user = this.state.user

        // Verificando se o usuário passado existe ID e se existir será usado o método PUT para alterar.
        const method = user.id ? 'put' : 'post'

        // Definindo a URL passado ID ou não.
        const url = user.id ? `${baseUrl}/${user.id}` : baseUrl

        // Fazendo um chamada Ajax usando axios, passado o método e os pâmetros do caminho (url) e dados (user),
        axios[method](url, user)
            .then(resp => {
                // Atualizando a lista com o novo usuário,
                const list = this.getUpdateList(resp.data)
                // Zerando o usuário do formulário e passando a nova lista para o state,
                this.setState({ user: initialState.user, list })
            })
    }

    getUpdateList(user, add = true) {
        // Verificando se o usuário existe e se existir, não o coloca na lista e o remove para adicionar o novo.
        const list = this.state.list.filter(u => u.id !== user.id)
        // Colocando o novo usuário.
        if (add) list.unshift(user)
        return list
    }

    updateFild(event) {
        const user = { ...this.state.user }
        user[event.target.name] = event.target.value
        this.setState({ user })
    }

    renderForm() {
        return (
            <div className="form">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Nome</label>
                            <input type="text" className='form-control'
                                name='name' value={this.state.user.name}
                                onChange={e => this.updateFild(e)}
                                placeholder='Digite o nome...' />
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Email</label>
                            <input type="text" className='form-control'
                                name='email'
                                value={this.state.user.email}
                                onChange={e => this.updateFild(e)}
                                placeholder='Digite o email...' />
                        </div>

                    </div>
                </div>

                <hr />

                <div className="row">
                    <div className="col-12 d-flex justify-content-end">
                        <button className="btn btn-primary"
                            onClick={_ => this.save()}>
                            Salvar
                        </button>

                        <button className="btn btn-secondary ml-2"
                            onClick={_ => this.clear()}>
                            Cancelar
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    load(user) {
        this.setState({ user })
    }

    remove(user) {
        axios.delete(`${baseUrl}/${user.id}`)
            .then(resp => {
                const list = this.getUpdateList(user, false)
                this.setState({ list })
            })
    }

    renderTable() {
        return (
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRow()}
                </tbody>
            </table>
        )
    }

    renderRow() {
        return this.state.list.map(user => {
            return (
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td className='button'>
                        <button className="btn btn-warning"
                        onClick={_ => this.load(user)}>
                            <i className="fa fa-pencil"></i>
                        </button>
                        <button className="btn btn-danger ml-2"
                        onClick={_ => this.remove(user)}>
                            <i className="fa fa-trash"></i>
                        </button>
                    </td>
                </tr>
            )
        })
    }

    render() {
        return (
            <Main {...headerProps}>
                {this.renderForm()}
                {this.renderTable()}
            </Main>
        )
    }
}