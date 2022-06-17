const initialState = {
    todos: [
        {
            description: 'Make todo app',
            done: false,
            id: 'asdasdadadads'
        },
        {
            description: 'Eat something',
            done: true,
            id: 2
        },
        {
            description: 'Play with cat',
            done: false,
            id: 3
        }
    ]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ITEM_CREATED':
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        case 'ITEM_DONE': 
            const arr = state.todos.map(item => {
                if (item.id == action.payload) {
                    item.done = true;
                }
            })
            return {
                ...state,
                todos: arr
            }
        default: return state
    }
}

export default reducer;