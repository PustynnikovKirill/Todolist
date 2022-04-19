import {FilterValuesType, TodolistType} from "../App";


export const TasksReducers =(state:TodolistType, action:TasksReducersType)=>{
    switch (action.type){
        case "CHANGEFILTER":{
            // let todolist = todolists.find(tl => tl.id === todolistId);
            // if (todolist) {
            //     todolist.filter = value;
            return state.filter((el)=>el.action.payload.todolistId === action.payload.todolistId ? {...el, filter:action.payload.value}: el )
        }
        default: return state
    }
}
type TasksReducersType = changeFilterACType

type changeFilterACType=ReturnType<typeof changeFilterAC>

export const changeFilterAC =(value: FilterValuesType, todolistId: string)=>{
    return {
        type:"CHANGEFILTER",
        payload:{
            value,
            todolistId
        }
    } as const
}