
export const todoFetching = () => {
    return {
        type: 'TODO_FETCHING'
    }
}

export const todoFetched = () => {
    return {
        type: 'TODO_FETCHED'
    }
}

export const todoFetchingError = () => {
    return {
        type: 'TODO_FETCHING_ERROR'
    }
}

export const itemCreated = (item) => {
    return {
        type: 'ITEM_CREATED',
        payload: item
    }
}

export const itemDone = (id) => {
    return {
        type: 'ITEM_DONE',
        payload: id
    }
}