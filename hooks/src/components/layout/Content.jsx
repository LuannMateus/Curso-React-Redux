import React from 'react';
import { Switch, Route } from 'react-router-dom';


import Home from '../../views/examples/Home';
import UseState from '../../views/examples/useState';
import UseEffect from '../../views/examples/useEffect';
import UseRef from '../../views/examples/useRef';
import NotFound from '../../views/examples/NotFound';

import './Content.css';

const Content = props => {
    return (
        <main className='Content'>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/useState' component={UseState} />
                <Route path='/useEffect' component={UseEffect} />
                <Route path='/useRef' component={UseRef} />
                <Route path='*' component={NotFound} /> 
            </Switch>
        </main>
    )
}

export default Content;