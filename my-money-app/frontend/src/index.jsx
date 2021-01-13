import React from 'react'
import ReactDOM from 'react-dom';

import { applyMiddleware, createStore } from 'redux';
import reducers from '../src/main/store/reducers/reducers.js';

import { Provider } from 'react-redux';

import promise from 'redux-promise';

import App from './main/App.jsx';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
                    && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = applyMiddleware(promise)(createStore)(reducers, devTools);

ReactDOM.render(
    <Provider store={store}>
         <App /> 
    </Provider>, 
document.getElementById('app'))