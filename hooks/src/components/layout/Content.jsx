import React from 'react';
import { Switch, Route } from 'react-router-dom';


import Home from '../../views/examples/Home';
import UseState from '../../views/examples/useState';
import UseEffect from '../../views/examples/useEffect';
import UseRef from '../../views/examples/useRef';
import UseMemo from '../../views/examples/useMemo';
import UseCallback from '../../views/examples/useCallback';
import UseContext from '../../views/examples/useContext';
import UseReducer from '../../views/examples/useReducer';
import UsePersonalHook from '../../views/examples/usePersonalHook';
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
                <Route path='/useMemo' component={UseMemo} />
                <Route path='/useCallback' component={UseCallback} />
                <Route path='/useContext' component={UseContext} />
                <Route path='/useReducer' component={UseReducer} />
                <Route path='/usePersonalHook' component={UsePersonalHook} />

                <Route path='*' component={NotFound} /> 
            </Switch>
        </main>
    )
}

export default Content;