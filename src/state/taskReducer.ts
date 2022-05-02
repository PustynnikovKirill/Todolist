import {TasksStateType, TodolistType} from '../App';
import {v1} from 'uuid';
import {AddTodolistActionType, RemoveTodolistActionType} from "./todolists-reducer";

export type RemoveTaskActionType = {
    type: 'REMOVE-TASK'
    id: string
    todolistId: string
}

export type ActionsType = RemoveTaskActionType | addTaskACType | changeTaskStatusACType | titleTaskStatusACType | AddTodolistActionType | RemoveTodolistActionType;

export const tasksReducer = (state: TasksStateType, action: ActionsType): TasksStateType => {
    switch (action.type) {
        case 'REMOVE-TASK':
            return {...state, [action.todolistId]: state[action.todolistId].filter(el => el.id !== action.id)}
        case 'ADD-TASK': {
            const newId = v1()
            const newTask = {id: newId, title: action.payload.title, isDone: false}
            return {...state, [action.payload.todolistId]: [newTask, ...state[action.payload.todolistId]]}
        }
        case 'TASK-STATUS':
            return {...state,
                [action.payload.todolistId]: state[action.payload.todolistId].map(el => el.id === action.payload.id ? {
                    ...el,
                    isDone: action.payload.isDone
                } : el)
            }
        case 'TASKS-TITLE':
            return {...state,[action.payload.todolistId]: state[action.payload.todolistId].map(el=>el.id === action.payload.id ? {...el,title:action.payload.title}:el)}
        case 'ADD-TODOLIST':
            return {...state,[action.todolistID]:[]}
        case 'REMOVE-TODOLIST':
            let copyState = {...state}
            delete copyState[action.id]
            return copyState
        default:
            throw new Error("I don't understand this type")
    }
}

export const removeTaskAC = (id: string, todolistId: string): RemoveTaskActionType => {
    return {type: 'REMOVE-TASK', id, todolistId}
}
type addTaskACType = ReturnType<typeof addTaskAC>
export const addTaskAC = (title: string, todolistId: string) => {
    return {
        type: 'ADD-TASK',
        payload: {
            title, todolistId
        }
    } as const
}

type changeTaskStatusACType = ReturnType<typeof changeTaskStatusAC>
export const changeTaskStatusAC = (id: string, isDone: boolean, todolistId: string) => {
    return {
        type: 'TASK-STATUS',
        payload: {
            id, isDone, todolistId
        }
    } as const
}

type titleTaskStatusACType = ReturnType<typeof titleTaskStatusAC>
export const titleTaskStatusAC = (id: string, title: string, todolistId: string) => {
    return {
        type: 'TASKS-TITLE',
        payload: {
            id, title, todolistId
        }
    }as const
}