import {
    NUM_MIN_CHANGE,
    NUM_MAX_CHANGE
} from './actionsTypes';

// Action Creator
export const alterarNumeroMinimo = newNumber => {
    return {
        type: NUM_MIN_CHANGE,
        payload: parseInt(newNumber)
    }
}

export const alterarNumeroMaximo = newNumber => {
    return {
        type: NUM_MAX_CHANGE,
        payload: parseInt(newNumber)
    }
}

