import { createReducer } from "@reduxjs/toolkit";

import {
    todoFetching,
    todoFetched,
    todoFetchingError,
    itemCreated,
    itemDone
} from './actions';

const initialState = {
    todos: [
        {
            description: 'Make todo app',
            done: false,
            id: 1
        },
        {
            description: 'Eat something',
            done: true,
            id: 2
        },
        {
            description: 'play with cat',
            done: false,
            id: 3
        }
    ],
    loadingReducer: 'idle'
}

//const reducer = createReducer(initialState, builder => {
//    builder
//        .addCase(todoFetching, state => {
//            state.loadingReducer = 'loading';
//        })
//        .addCase(todoFetched, state => {
//            state.loadingReducer = 'idle';
//        })
//        .addCase(todoFetchingError, state => {
//            state.loadingReducer = 'error';
//        })
//        .addCase(itemCreated, (state, action) => {
//            state.todos.push(action.payload);
//        })
//        .addCase(itemDone, (state, action) => {
//            state.todos = state.todos.filter(item => item.id == action.payload ? item.done = true : item.done = false);
//        })
//        .addDefaultCase(() => {});
//});

const reducer = (state = initialState, action) => {
    switch (action.payload) {
        case 'TODO_FETCHING':
            return {
                ...state,
                loadingReducer: 'loading'
            }
        case 'TODO_FETCHED':
            return {
                ...state,
                loadingReducer: 'idle'
            }
        case 'TODO_FETCHING_ERROR':
            return {
                ...state,
                loadingReducer: 'error'
            }
        case 'ITEM_CREATED':
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        case 'ITEM_DONE': 
            return {
                ...state,
                todos: state.todos.map(item => item.id == action.payload ? item.done = true : item.done = false)
            }
        default: return state
    }
}

export default reducer;