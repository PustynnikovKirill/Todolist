import React from "react";
import {FilterType} from "./App";


export type TodolistType = {
    name: string
    tasks: TaskType[]
    onClickRemoveTask:(id:number)=>void
    onClickFilter:(filter:FilterType)=>void

}
export type TaskType = {
    id: number,
    title: string,
    isDone: boolean
}


export const Todolist: React.FC<TodolistType> = ({name, tasks,onClickRemoveTask,onClickFilter}) => {
   const onClickRemoveHandler = (id:number) => {
       onClickRemoveTask(id)
    }
    const onClickButtonHandler = (filter:FilterType) => {
        onClickFilter(filter)
    }
    return (
        <div>
            <h3>{name}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {tasks.map(el => {
                    return <li key={el.id}>
                        <input type="checkbox" checked={el.isDone}/>
                        <span>{el.title}</span>
                        <button onClick={()=>onClickRemoveHandler(el.id)}>✖</button>
                    </li>
                })}
            </ul>
            <div>
                <button onClick={()=>onClickButtonHandler('all')}>All</button>
                <button onClick={()=>onClickButtonHandler('active')}>Active</button>
                <button onClick={()=>onClickButtonHandler('completed')}>Completed</button>
            </div>
        </div>
    )


}