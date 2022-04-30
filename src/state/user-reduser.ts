import {FilterValuesType, TodolistType} from "../App";
import {v1} from "uuid";


export const TodolistReducer = (state: Array<TodolistType>, action: TodolistReducerType) => {
    switch (action.type) {
        case 'REMOVE-TODOLIST': {
            // setTodolists(todolists.filter(tl => tl.id !== id));
            return state.filter(el => el.id !== action.payload.todolistId)
        }
        case 'ADD-TODOLIST': {
            let newTodolistId = v1();
            let newTodolist = {id: newTodolistId, title: action.payload.title, filter: 'all'};
            return [...state, newTodolist]
        }
        case 'CHANGE-TODOLIST-TITLE': {
            return state.map(el=>el.id === action.payload.id ? {...el,title:action.payload.title}:el)
        }
        case 'CHANGE-TODOLIST-FILTER':{
            return state.map(el=>el.id === action.payload.id ? {...el,filter:action.payload.filter}:el)
        }
        default:
            return state
    }
}
export type TodolistReducerType = removeTodolistAC | addTodolistType | changeTodolistType | changeTodolistFilterACType
export type removeTodolistAC = ReturnType<typeof removeTodolistAC>
export const removeTodolistAC = (todolistId: string) => {
    return {
        type: 'REMOVE-TODOLIST',
        payload: {
            todolistId
        }
    } as const
}
export type addTodolistType = ReturnType<typeof addTodolistAC>
export const addTodolistAC = (title: string) => {
    return {
        type: 'ADD-TODOLIST',
        payload: {
            title
        }
    }as const
}
export type changeTodolistType = ReturnType<typeof changeTodolistAC>
export const changeTodolistAC = (id: string, title: string) => {
    return {
        type:'CHANGE-TODOLIST-TITLE',
        payload: {
            id, title
        }
    }as const
}

export type changeTodolistFilterACType = ReturnType<typeof changeTodolistFilterAC>
export const changeTodolistFilterAC = (id: string, filter: FilterValuesType) => {
    return {
        type: 'CHANGE-TODOLIST-FILTER',
        payload: {
            id,filter
        }
    }as const
}





















