import {FilterValuesType, TasksStateType, TodolistType} from '../App';
import {v1} from 'uuid';
import {AddTodolistActionType} from "./todolists-reducer";


type ActionsType = removeTaskACType | AddTaskACType | changeTaskStatusType | ChangeTitleType | AddTodolistActionType;

export const tasksReducer = (state: TasksStateType, action: ActionsType): TasksStateType => {
    switch (action.type) {
        case 'REMOVE-TASK': {
            return {...state, [action.todolistId]: state[action.todolistId].filter(el => el.id !== action.id)}

        }
        case "ADD-TASK": {
            const newTask =  {id: '4', title:action.title, isDone: false}
            return {...state,[action.todolistId]:[newTask,...state[action.todolistId]]}
        }
        case "TASK-STATUS": {
            return {...state, [action.todolistId]:state[action.todolistId].map(el => el.id === action.id ? {...el,isDone:action.isDone} : el)}
        }
        case "TASK-TITLE": {
            return {...state, [action.todolistId]:state[action.todolistId].map(el => el.id === action.id ? {...el, title:action.title}:el)}
        }
        case 'ADD-TODOLIST':
            const stateCopy = {...state}
             stateCopy[action.todolistId]=[]
                return  stateCopy

        default:
            return state
    }
}

export type removeTaskACType = ReturnType<typeof removeTaskAC>
export const removeTaskAC = (todolistId: string, id: string) => ({
        type: 'REMOVE-TASK', todolistId: todolistId, id: id} as const
)
type AddTaskACType = ReturnType<typeof addTaskAC>
export const addTaskAC = (todolistId:string,title:string) => ({
    type: "ADD-TASK",
    todolistId:todolistId,
    title: title
} as const)

type changeTaskStatusType = ReturnType<typeof changeTaskStatusAC>
export const changeTaskStatusAC = (todolistId: string, id: string, isDone:boolean) => {
    return {
        type: "TASK-STATUS",
        todolistId,
        id,
        isDone
    } as const
}

type ChangeTitleType = ReturnType<typeof changeTitleAC>
export const changeTitleAC = (todolistId: string, id: string, title: string) => {
    return {
        type: "TASK-TITLE",
        todolistId,
        id,
        title
    } as const
}