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