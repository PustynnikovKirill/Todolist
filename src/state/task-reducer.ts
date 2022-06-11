import {FilterValuesType, TasksStateType, TodolistType} from '../App';
import {v1} from 'uuid';

export type Action2Type = {
    type: '2',
    title: string
}


type ActionsType = removeTaskACType | Action2Type ;

export const TasksReducer = (state: TasksStateType, action: ActionsType):TasksStateType => {
    switch (action.type) {
        case 'REMOVE-TASK':{
            // const copyState = {...state}
            // const tasks = state[action.todolistId]
            // const filteredTask = tasks.filter(el=>el.id !== action.id)
            // copyState[action.todolistId]=filteredTask
            // return copyState
            return {...state,[action.todolistId]:state[action.todolistId].filter(el=>el.id !== action.id)}

        }
        case "2":{
            return  {...state}
        }
        default:
            return state
    }
}


export type removeTaskACType = ReturnType<typeof removeTaskAC>
export const removeTaskAC = (todolistId: string, id:string) => {
    return {type: 'REMOVE-TASK', todolistId, id}
}
export const AddTodolistAC = (title: string): Action2Type => {
    return { type: '2', title: title}
}
