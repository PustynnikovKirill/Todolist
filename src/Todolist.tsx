import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import {FilterType} from "./App";


export type TodolistType = {
    name: string
    tasks: TaskType[]
    onClickRemoveTask:(id:string)=>void
    onClickFilter:(filter:FilterType)=>void
    addTask: (title:string)=> void
    changTaskStatus:(id:string,checked:boolean)=>void
    filter:FilterType
}
export type TaskType = {
    id: string,
    title: string,
    isDone: boolean
}



export const Todolist: React.FC<TodolistType> = ({name, tasks,
                                                     onClickRemoveTask,onClickFilter,
                                                     addTask, changTaskStatus,filter
                                                 }) => {
    let [title,setTitle] = useState('')
    let [error,setError] = useState<string | null>(null)

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
       setTitle(event.currentTarget.value)
    }
    const onClickInputButtonHandler = () => {
        if (title.trim() !== ''){
            addTask(title.trim())
            setTitle('')
        } else {
            setError('Title is requerid')
        }

    }
    const onKeyPressHandler = (event:KeyboardEvent<HTMLInputElement>) => {
        setError(null)
        if (title.trim() !== ''){
            if (event.key === 'Enter') {
                addTask(title)
                setTitle('')
            }
        }

    }

    return (
        <div>
            <h3>{name}</h3>
            <div>

                <input value = {title} onKeyPress={onKeyPressHandler}
                       onChange = {onChangeInputHandler} className={error ? 'error':''}/>
                <button onClick={onClickInputButtonHandler}>+</button>
                {error && <div className={'error-message'}>{error}</div>}
            </div>
            <ul>
                {tasks.map(el => {
                    const onClickRemoveMapHandler = () => {
                        onClickRemoveHandler(el.id)
                    }
                    const onChangeHandler = (ev:ChangeEvent<HTMLInputElement>) => {
                        changTaskStatus(el.id,ev.currentTarget.checked)
                    }
                    return <li key={el.id} className={el.isDone === true ? 'is-done':''}>
                        <input type="checkbox" checked={el.isDone} onChange={onChangeHandler}/>
                        <span>{el.title}</span>
                        <button onClick={onClickRemoveMapHandler}>✖</button>
                    </li>
                })}
            </ul>
            <div>
                <button onClick={onClickButtonAllHandler} className={filter === 'all' ? 'active-filter':''}>All</button>
                <button onClick={onClickButtonActiveHandler} className={filter === 'active' ? 'active-filter':''}>Active</button>
                <button onClick={onClickButtonCompletedHandler} className={filter === 'completed' ? 'active-filter':''}>Completed</button>
            </div>
        </div>
    )
}