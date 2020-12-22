import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';


import Home from '../../views/examples/Home';
import About from '../../views/examples/About';
import Param from '../../views/examples/Param';
import NotFound from '../../views/examples/NotFound';

import './Content.css';

const Content = props => {
    return (
        <main className='Content'>
            <h1>Content</h1>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/about' component={About} />
                <Route path='/param/:id' component={Param} />
                <Route path='*' component={NotFound} /> 
            </Switch>
        </main>
    )
}

export default Content;