import { 
    DESCRIPTION_CHANGE,
    TODO_SEARCH,
    LIST_ADD,
    CLEAR
} from '../actions/typeActions.js';

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
        
        case TODO_SEARCH:

            return {
                ...state,
                list: action.payload.data
            }

        case LIST_ADD:
            return {
                ...state,
                description: ''
            }
        case CLEAR:
            return {
                ...state,
                description: ''
            }
        default:
            return state
    }
}