import { combineReducers, createStore } from 'redux';

import todoReducers from './todoReducers.js';

const rootReducers = combineReducers({
    todo: todoReducers
})

const storeConfig = _ => {
    return createStore(rootReducers)
}

export default storeConfig;