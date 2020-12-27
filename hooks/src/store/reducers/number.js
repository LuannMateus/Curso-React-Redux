export function numberReducer(state, action) {
    switch (action.type) {
        case 'numberAdd2':
            return { ...state, number: state.number + 2 }
        case 'mult7':
            return { ...state, number: state.number * 7 }
        case 'divid25':
            return { ...state, number: state.number / 25 }
        case 'interger':
            return { ...state, number: parseInt(state.number) }
        case 'add10':
            return { ...state, number: state.number + action.payload }
        case 'random':
            return { ...state, number: state.number + parseInt(Math.random() * (-100 - 100) + 100) }
        default:
            return state
    }
}
