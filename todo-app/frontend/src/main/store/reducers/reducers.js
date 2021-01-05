import { combineReducers, createStore } from 'redux';

import todoReducers from './todoReducers.js';

const rootReducers = combineReducers({
    todo: todoReducers
})

/*
const storeConfig = devTools => {
    return createStore(rootReducers, devTools)
}*/

export default rootReducers;