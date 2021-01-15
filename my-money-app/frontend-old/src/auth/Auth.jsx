import './Auth.css';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { login, singup } from '../main/store/actions/authActions.js';

import Row from '../common/layout/Row.jsx';
import Grid from '../common/layout/Grid.jsx';
import If from '../common/operator/If.jsx';
import Messages from '../common/msg/Messages.jsx';
import Input from '../common/form/InputAuth.jsx';

class Auth extends Component {

    constructor(props) {
        super(props)
        this.state = { loginMode: true }
    }

    changeMode() {
        this.setState({ loginMode: !this.state.loginMode })
    }

    onSubmit(values) {
        const { login, singup } = this.props
        this.state.loginMode ? login(values) : singup(values)
    }

    render() {
        const { loginMode } = this.state
        const { handleSubmit } = this.props

        return (
            <div className="login-box">
                <div className="login-logo"><b> My</b> Money</div>
                <div className="login-box-body">
                    <p className="login-box-msg">Bem vindo!</p>
                    <form onSubmit={handleSubmit(v => this.onSubmit(v))}>
                        <Field component={Input} type="input" name="name"
                            placeholder="Nome" icon='user' hide={loginMode} />
                        <Field component={Input} type="email" name="email"
                            placeholder="E-mail" icon='envelope' />
                        <Field component={Input} type="password" name="password"
                            placeholder="Senha" icon='lock' />
                        <Field component={Input} type="password" name="confirm_password"
                            placeholder="Confirmar Senha" icon='lock' hide={loginMode} />
                        <Row>
                            <Grid cols="4">
                                <button type="submit"
                                    className="btn btn-primary btn-block btn-flat">
                                    {loginMode ? 'Entrar' : 'Registrar'}
                                </button>
                            </Grid>
                        </Row>
                    </form>
                    <br />
                    <a onClick={() => this.changeMode()}>
                        {loginMode ? 'Novo usuário? Registrar aqui!' :
                            'Já é cadastrado? Entrar aqui!'}
                    </a>
                </div>
                <Messages />
            </div>
        )
    }
}

Auth = reduxForm({ form: 'authForm' })(Auth)

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        login,
        singup
    }, dispatch)
}

export default connect(null, mapDispatchToProps)(Auth)