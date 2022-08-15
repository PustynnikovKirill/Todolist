import {TasksStateType, TodolistType} from "../App";
import {v1} from "uuid";
import {addTodolistAC, addTodolistACType} from "./todolists-reducer";

const initialState: TasksStateType = {}

export const tasksReducer = (state:TasksStateType = initialState, action: ActionType):TasksStateType => {
    switch (action.type) {
        case 'REMOVE-TASK':
           return {...state, [action.payload.todolistId]:state[action.payload.todolistId].filter(el=>el.id !== action.payload.id)}
        case 'ADD-TASK':
        const newTask = {id: v1(), title: action.payload.title, isDone: false}
            return {...state,[action.payload.todolistId]:[newTask,...state[action.payload.todolistId]]}
        case 'CHANGE-TASK-STATUS':
            return {...state,[action.payload.todolistId]:state[action.payload.todolistId].map(el=>el.id === action.payload.id ? {...el,isDone:action.payload.isDone}:el)}
        case 'CHANGE-TASK-TITLE':
            return {...state,[action.payload.todolistId]:state[action.payload.todolistId].map(el=>el.id === action.payload.id ? {...el,title:action.payload.title}:el)}
        case 'ADD-TODOLIST':
            return {...state,[action.todolistId]:[]}
        default:
            return state
    }
}

export type ActionType = removeTaskACType| addTaskACType
    | changeTaskStatusACType | changeTaskTitleACType | addTodolistACType

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
type changeTaskTitleACType = ReturnType<typeof changeTaskTitleAC>
export const changeTaskTitleAC =(todolistId:string,id:string,title:string)=> {
    return {
        type:'CHANGE-TASK-TITLE',
        payload:{
            todolistId,
            id,
            title
        }
    } as const
}

