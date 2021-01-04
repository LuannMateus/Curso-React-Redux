// ACtions Creators

export const handleChange = newValue => {

    return {
        type: 'DESCRIPTION_CHANGE',
        payload: newValue
    }
}

export const handleAddTodo = newList => {
    return {
        type: 'LIST_ADD',
        payload: newList
    }
}