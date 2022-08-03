import React, {ChangeEvent,KeyboardEvent} from "react";
import {FilterType} from "./App";


export type TodolistType = {
    name: string
    tasks: TaskType[]
    onClickRemoveTask:(id:string)=>void
    onClickFilter:(filter:FilterType)=>void
    title: string
    setInput:(title:string)=>void
    onClickButtonInput: ()=> void
}
export type TaskType = {
    id: string,
    title: string,
    isDone: boolean
}



export const Todolist: React.FC<TodolistType> = ({name, tasks,
                                                     onClickRemoveTask,onClickFilter,
                                                     title,setInput,onClickButtonInput
                                                 }) => {
   const onClickRemoveHandler = (id:string) => {
       onClickRemoveTask(id)
    }

    const onClickButtonAllHandler = () => {
        onClickFilter('all')
    }
    const onClickButtonActiveHandler = () => {
        onClickFilter('active')
    }
    const onClickButtonCompletedHandler = () => {
        onClickFilter('completed')
    }
    const onChangeInputHandler = (event:ChangeEvent<HTMLInputElement>) => {
        setInput(event.currentTarget.value)
    }
    const onClickInputButtonHandler = () => {
        onClickButtonInput()
        setInput(" ")

    }
    const onKeyPressHandler = (event:KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            onClickButtonInput()
            setInput(" ")
        }
    }
    return (
        <div>
            <h3>{name}</h3>
            <div>

                <input value = {title} onKeyPress={onKeyPressHandler}
                       onChange = {onChangeInputHandler}/>
                <button onClick={onClickInputButtonHandler}>+</button>
            </div>
            <ul>
                {tasks.map(el => {
                    const onClickRemoveMapHandler = () => {
                        onClickRemoveHandler(el.id)
                    }
                    return <li key={el.id}>
                        <input type="checkbox" checked={el.isDone}/>
                        <span>{el.title}</span>
                        <button onClick={onClickRemoveMapHandler}>✖</button>
                    </li>
                })}
            </ul>
            <div>
                <button onClick={onClickButtonAllHandler}>All</button>
                <button onClick={onClickButtonActiveHandler}>Active</button>
                <button onClick={onClickButtonCompletedHandler}>Completed</button>
            </div>
        </div>
    )
}