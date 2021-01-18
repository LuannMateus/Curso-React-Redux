import React from 'react';
import { Switch, Route, Redirect } from 'react-router';

import Home from '../components/home/Home';
import UserCrud from '../components/user/UserCrud';

/*
    * Switch: Escolhe entre as rotas.
    * Router: Define as rotas passando path='/caminho' e component={Component} a ser carregado.
    * Redirect: Caso não ache nenhum rout, retorna para o lugar passado no to='/'.
*/ 

export default props => {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/users' component={UserCrud} />
            <Redirect from='*' to='/'/>
        </Switch>
    )
}