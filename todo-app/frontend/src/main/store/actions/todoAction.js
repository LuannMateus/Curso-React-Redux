import axios from 'axios';

import {
    DESCRIPTION_CHANGE,
    TODO_SEARCH,
    LIST_ADD,
    MARK_AS_DONE,
    MARK_AS_UNDONE,
    DELETE,
    CLEAR

} from './typeActions.js';

const URL = 'http://localhost:3003/api/todos'

// Actions Creators
export const handleChange = newValue => {

    return {
        type: DESCRIPTION_CHANGE,
        payload: newValue
    }
}

export const search = _ => {

    return (dispatch, getState) => {

        const description = getState().todo.description

        const search = description ? `&description__regex=/${description}/` : ''
        axios.get(`${URL}?sort=-createdAt${search}`)
            .then(resp => dispatch({
                type: TODO_SEARCH,
                payload: resp.data
            }))
    }

}

export const addTodo = description => {
    return dispatch => {
        axios.post(URL, { description })
            .then(resp => dispatch(clear()))
            .then(resp => dispatch(search()))
    }
}

export const markAsDone = todo => {
    return dispatch => {
        axios.put(`${URL}/${todo._id}`, { ...todo, done: true })
            .then(_ => dispatch({
                type: MARK_AS_DONE
            }))
            .then(_ => dispatch(search()))
    }
}

export const markAsUndone = todo => {
    return dispatch => {
        axios.put(`${URL}/${todo._id}`, { ...todo, done: false })
            .then(_ => dispatch({
                type: MARK_AS_UNDONE
            }))
            .then(_ => dispatch(search()))
    }
}

export const remove = todo => {
    return dispatch => {
        axios.delete(`${URL}/${todo._id}`)
            .then(_ => dispatch({
                type: DELETE
            }))
            .then(_ => dispatch(search()))
    }
}

export const clear = _ => {
    return {
        type: CLEAR
    }
}