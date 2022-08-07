import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import {FilterType} from "./App";
import {AddItemForm} from "./AddItemForm";


export type TodolistType = {
    todolistId: string
    name: string
    tasks: TaskType[]
    onClickRemoveTask: (todolistId: string, id: string) => void
    changeFilter: (todolistId: string, filter: FilterType) => void
    addTask: (todolistId: string, title: string) => void
    changTaskStatus: (todolistId: string, id: string, checked: boolean) => void
    filter: FilterType
    removeTodolist:(todolistId:string)=>void
}
export type TaskType = {
    id: string,
    title: string,
    isDone: boolean
}


export const Todolist: React.FC<TodolistType> = ({
                                                     name, tasks,
                                                     onClickRemoveTask, changeFilter,
                                                     addTask, changTaskStatus, filter, todolistId,
                                                     removeTodolist
                                                 }) => {


    const addTasks = (title:string) => {
        addTask(todolistId,title)
    }


    const onClickRemoveHandler = (todolistId: string, id: string) => {
        onClickRemoveTask(todolistId, id)
    }

    const onClickButtonAllHandler = () => {
        changeFilter(todolistId, 'all')
    }
    const onClickButtonActiveHandler = () => {
        changeFilter(todolistId, 'active')
    }
    const onClickButtonCompletedHandler = () => {
        changeFilter(todolistId, 'completed')
    }
    const removeTodolistHandler = () => {
        removeTodolist(todolistId)
    }

    return (
        <div>
            <div>
                <h3>{name}
                    <button onClick={removeTodolistHandler}>x</button>
                </h3>

            </div>
            <div>
                <AddItemForm addItem={addTasks} />
            </div>
            <ul>
                {tasks.map(el => {
                    const onClickRemoveMapHandler = () => {
                        onClickRemoveHandler(todolistId, el.id)
                    }
                    const onChangeHandler = (ev: ChangeEvent<HTMLInputElement>) => {
                        changTaskStatus(todolistId, el.id, ev.currentTarget.checked)
                    }
                    return <li key={el.id} className={el.isDone === true ? 'is-done' : ''}>
                        <input type="checkbox" checked={el.isDone} onChange={onChangeHandler}/>
                        <span>{el.title}</span>
                        <button onClick={onClickRemoveMapHandler}>✖</button>
                    </li>
                })}
            </ul>
            <div>
                <button onClick={onClickButtonAllHandler} className={filter === 'all' ? 'active-filter' : ''}>All
                </button>
                <button onClick={onClickButtonActiveHandler}
                        className={filter === 'active' ? 'active-filter' : ''}>Active
                </button>
                <button onClick={onClickButtonCompletedHandler}
                        className={filter === 'completed' ? 'active-filter' : ''}>Completed
                </button>
            </div>
        </div>
    )
}