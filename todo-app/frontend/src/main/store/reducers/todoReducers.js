import { DESCRIPTION_CHANGE } from '../actions/typeActions.js';

const initialValue = {
    description: '',
    list: []
}

export default (state = initialValue, action) => {

    switch (action.type) {

        case DESCRIPTION_CHANGE:
            return {
                ...state,
                description: action.payload
            }
        case 'LIST_ADD':
            
            return {
                ...state,
                list: action.payload
            }
        default:
            return state
    }
}