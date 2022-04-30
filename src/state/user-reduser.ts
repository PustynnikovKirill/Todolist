import {TodolistType} from "../App";
import {v1} from "uuid";


export const TodolistReducer = (state: Array<TodolistType>, action: TodolistReducerType) => {
    switch (action.type) {
        case 'REMOVE-TODOLIST': {
            // setTodolists(todolists.filter(tl => tl.id !== id));
            return state.filter(el=>el.id !== action.payload.todolistId)
        }
        case 'ADD-TODOLIST': {
            let task = {id: v1(), title: action.payload.title, isDone: false};
            return {task,...state}
        }
        default:
            return state
    }
}
export type TodolistReducerType = removeTodolistAC | addTodolistType
export type removeTodolistAC = ReturnType<typeof removeTodolistAC>
export const removeTodolistAC = ( todolistId: string) => {
    return {
        type: 'REMOVE-TODOLIST',
        payload: {
            todolistId
        }
    } as const
}
export type addTodolistType = ReturnType<typeof addTodolistAC>
export const addTodolistAC = (title: string, todolistId: string) => {
    return{
        type: 'ADD-TODOLIST',
        payload: {
            title,todolistId
        }
    }
}























