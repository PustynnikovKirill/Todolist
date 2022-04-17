import {TaskType} from "../Todolist";

export const TasksReducer = (state:Array<TaskType>,action:TaskReducerType) => {
        switch (action.type){
            case "REMOVE-TASK": {
                return state
            }
            default: return  state
        }
}
type TaskReducerType = removeTaskACType
type removeTaskACType = ReturnType<typeof removeTaskAC>
export const  removeTaskAC = (id: string)=>{
    return {
        type:"REMOVE-TASK",
        payload:{
            id
        }
    } as const
}