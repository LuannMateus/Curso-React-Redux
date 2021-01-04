import React from 'react';
import ReactDOM from 'react-dom';

import App from './main/App.jsx';

import './assets/img/todoIcon.svg';
import './templates/Custom.css';

import { Provider } from 'react-redux';
import storeConfig from './main/store/reducers/todoReducers'

const store = storeConfig()

ReactDOM.render(
    <Provider store = { store }>
        <App />
    </Provider>         
,document.getElementById('app'));