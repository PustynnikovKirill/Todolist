import {TasksStateType, TodolistType} from "../App";
import {v1} from "uuid";


export const tasksReducer = (state:TasksStateType, action: ActionType) => {
    switch (action.type) {
        case 'REMOVE-TASK':
           return {...state, [action.payload.todolistId]:state[action.payload.todolistId].filter(el=>el.id !== action.payload.id)}
        case 'ADD-TASK':
        const newTask = {id: v1(), title: action.payload.title, isDone: false}
            return {...state,[action.payload.todolistId]:[newTask,...state[action.payload.todolistId]]}
        case 'CHANGE-TASK-STATUS':
            return {...state,[action.payload.todolistId]:state[action.payload.todolistId].map(el=>el.id === action.payload.id ? {...el,isDone:action.payload.isDone}:el)}
        default:
            return state
    }
}

export type ActionType = removeTaskACType| addTaskACType
    | changeTaskStatusACType


type removeTaskACType = ReturnType<typeof removeTaskAC>
export const removeTaskAC =(todolistId:string,id:string)=> {
    return {
        type:'REMOVE-TASK',
        payload:{todolistId,id}
    } as const
}

type addTaskACType = ReturnType<typeof addTaskAC>
export const addTaskAC =(todolistId:string,title:string)=> {
    return {
        type:'ADD-TASK',
        payload:{
            todolistId,
            title
        }
    } as const
}
type changeTaskStatusACType = ReturnType<typeof changeTaskStatusAC>
export const changeTaskStatusAC =(todolistId:string,id:string,isDone:boolean)=> {
    return {
        type:'CHANGE-TASK-STATUS',
        payload:{
            todolistId,
            id,
            isDone
        }
    } as const
}