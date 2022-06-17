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

export const filterAll = () => {
    return {
        type: 'FILTER_ALL'
    }
}

export const filterActive = () => {
    return {
        type: 'FILTER_ACTIVE'
    }
}

export const filterDone = () => {
    return {
        type: 'FILTER_DONE'
    }
}

export const deleteItem = (id) => {
    return {
        type: 'DELETE_ITEM',
        payload: id
    }
}