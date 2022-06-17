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
    ],
    filteredTodos: [

    ],
    filter: 'all'
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ITEM_CREATED':
            return {
                ...state,
                filteredTodos: [...state.todos, action.payload],
                todos: [...state.todos, action.payload]
            }
        case 'ITEM_DONE': 
            return {
                ...state,
                filteredTodos: state.filteredTodos.map(item => item.id === action.payload ? {...item, done: !item.done} : item),
                todos: state.todos.map(item => item.id === action.payload ? {...item, done: !item.done} : item)
            }
        case 'FILTER_ALL':
            return {
                ...state,
                filteredTodos: state.todos,
                filter: 'all'
            }
        case 'FILTER_ACTIVE':
            return {
                ...state,
                filteredTodos: state.todos.filter(item => item.done !== true),
                filter: 'active'
            }
        case 'FILTER_DONE':
            return {
                ...state,
                filteredTodos: state.todos.filter(item => item.done === true),
                filter: 'done'
            }
        case 'DELETE_ITEM':
            return {
                ...state,
                filteredTodos: state.filteredTodos.filter(item => item.id !== action.payload),
                todos: state.todos.filter(item => item.id !== action.payload)
            }
        default: return state
    }
}

export default reducer;