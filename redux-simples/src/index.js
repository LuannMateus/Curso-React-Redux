import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import configStore from './store/storeConfig';

import './index.css';

import App from './App.jsx';

import reportWebVitals from './reportWebVitals';

const store = configStore()

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
