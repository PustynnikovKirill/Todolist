import React, {ChangeEvent, useCallback} from "react";
import {FilterType} from "./App";
import {AddItemForm} from "./AddItemForm";
import {EditableSpan} from "./EditableSpan";
import {TasksStateType} from "./AppWithRedux";
import {Task} from "./state/task";


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
    onChangeTodolist:(todolistId:string,id:string,newTitle:string)=>void
    onChangeNameTodolists:(todolistId:string,newTitle:string)=>void
}
export type TaskType = {
    id: string,
    title: string,
    isDone: boolean
}


export const Todolist: React.FC<TodolistType> = React.memo( ({
                                                     name, tasks,
                                                     onClickRemoveTask, changeFilter,
                                                     addTask, changTaskStatus, filter, todolistId,
                                                     removeTodolist, onChangeTodolist,
                                                     onChangeNameTodolists
                                                 }) => {
    const addTasks = useCallback((title:string) => {
        addTask(todolistId,title)
    },[todolistId,addTask])


    const onClickButtonAllHandler = useCallback(() => {
        changeFilter(todolistId, 'all')
    },[changeFilter,todolistId])
    const onClickButtonActiveHandler = useCallback(() => {
        changeFilter(todolistId, 'active')
    },[changeFilter,todolistId])
    const onClickButtonCompletedHandler =useCallback( () => {
        changeFilter(todolistId, 'completed')
    },[changeFilter,todolistId])
    const removeTodolistHandler = () => {
        removeTodolist(todolistId)
    }
    const onChangeNameTodolist = (newTitle:string) => {
        onChangeNameTodolists(todolistId,newTitle)
    }
    if (filter === 'completed') {
        tasks = tasks.filter(el=>el.isDone === true)
    }
    if (filter === 'active') {
        tasks = tasks.filter(el=>el.isDone === false)
    }
    const onClickRemoveMapHandler = (id:string)  => {
        onClickRemoveTask(todolistId, id)
    }
    const onChangeHandler = (id:string, checked:boolean) => {
        changTaskStatus(todolistId, id, checked)
    }
    const onChange = (id:string, newTitle:string) => {
        onChangeTodolist(todolistId,id,newTitle)
    }
    return (
        <div>
            <div>
                <h3> <EditableSpan
                    title={name}
                    onChange={onChangeNameTodolist}
                />
                    <button onClick={removeTodolistHandler}>x</button>
                </h3>

            </div>
            <div>
                <AddItemForm addItem={addTasks} />
            </div>
            <ul>
                {tasks.map(el => {

                    return <Task
                        task = {el}
                        changTaskStatus = {onChangeHandler}
                        onClickRemoveTask={onClickRemoveMapHandler}
                        onChangeTodolist = {onChange}
                    />
                })}
            </ul>
            <div>
                <button onClick={onClickButtonAllHandler} className={filter === 'all' ? 'active-filter' : ''}>All
                </button>
                <button onClick={onClickButtonActiveHandler}
                        className={filter === 'active' ? 'active-filter':''}>Active
                </button>
                <button onClick={onClickButtonCompletedHandler}
                        className={filter === 'completed' ? 'active-filter':''}>Completed
                </button>
            </div>
        </div>
    )
})