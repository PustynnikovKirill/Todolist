import {TodolistType} from "../App";
import {v1} from "uuid";


export const todolistsReducer = (state:Array<TodolistType>, action: ActionType) => {
    switch (action.type) {
        case 'REMOVE-TODOLIST':
           return state.filter(el=>el.id !== action.payload.todolistId)
        case 'ADD-TODOLIST':
            const newTodolist:TodolistType = {id: action.todolistId, title:action.title, filter: 'all'}
            return [...state,newTodolist]
        case 'CHANGE-TODOLIST-TITLE':
            return state.map(el=>el.id === action.payload.todolistId ? {...el, title:action.payload.title}:el)
        case 'CHANGE-TODOLIST-FILTER':
            return state.map(el=>el.id === action.payload.todolistId ? {...el, filter:action.payload.filter}:el)
        default:
            return state
    }
}

export type ActionType = removeTodolistACType|addTodolistACType|changeTodolistTitleACType
|changeTodolistFilterACType

type removeTodolistACType = ReturnType<typeof removeTodolistAC>
export const removeTodolistAC =(todolistId:string)=> {
    return {
        type:'REMOVE-TODOLIST',
        payload:{todolistId}
    } as const
}
export type addTodolistACType = ReturnType<typeof addTodolistAC>
export const addTodolistAC = (title: string)=> {
    return {
        type:'ADD-TODOLIST',
        title:title,
        todolistId:v1()
    } as const
}
type changeTodolistTitleACType = ReturnType<typeof changeTodolistTitle>
export const changeTodolistTitle = (todolistId:string, title: string)=> {
    return {
        type:'CHANGE-TODOLIST-TITLE',
        payload: {
            todolistId,
            title
        }
    } as const
}

type changeTodolistFilterACType = ReturnType<typeof changeTodolistFilter>
export const changeTodolistFilter = (todolistId:string, filter: string)=> {
    return {
        type:'CHANGE-TODOLIST-FILTER',
        payload: {
            todolistId,
            filter
        }
    } as const
}