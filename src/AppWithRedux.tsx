import React, {useReducer, useState} from 'react';
import './App.css';
import {TaskType, Todolist} from "./Todolist";
import {v1} from "uuid";
import {AddItemForm} from "./AddItemForm";
import {addTaskAC, changeTaskStatusAC, changeTaskTitleAC, removeTaskAC, tasksReducer} from "./state/tasks-reducer";
import {
    addTodolistAC,
    changeTodolistFilter,
    changeTodolistTitle,
    removeTodolistAC,
    todolistsReducer
} from "./state/todolists-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./state/store";

export type FilterType = 'all'|'active'|'completed'

export type TodolistType = {
    id:string,
    title: string,
    filter:FilterType
}
export type TasksStateType = {
    [key:string]:TaskType[]
}

export const AppWithRedux = () => {

    const todolists = useSelector<AppRootStateType,Array<TodolistType>>(state => state.todolists)
    const tasks = useSelector<AppRootStateType,TasksStateType>(state => state.tasks)
    const dispatch = useDispatch()


    const addTodolist = (title:string) => {
        dispatch(addTodolistAC(title))
        dispatch(addTodolistAC(title))
    }

    const changeFilter = (todolistId:string,filter:FilterType) => {
        dispatch(changeTodolistFilter(todolistId,filter))
    }

    const removeTask = (todilistId:string,id:string) => {
        dispatch(removeTaskAC(todilistId,id))
    }

    const addTask = (todolistsId:string,title:string) => {
        dispatch(addTaskAC(todolistsId,title))
    }
    const changTaskStatus = (todolistId:string, id:string,checked:boolean) => {
        dispatch(changeTaskStatusAC(todolistId,id,checked))
    }
    const removeTodolist = (todolistId:string) => {
        dispatch(removeTodolistAC(todolistId))
    }
    const onChangeTodolist = (todolistId:string,id:string,newTitle:string) => {
        dispatch(changeTaskTitleAC(todolistId,id,newTitle))
    }
    const onChangeNameTodolists = (todolistId:string,newTitle:string) => {
        dispatch(changeTodolistTitle(todolistId,newTitle))
    }
    return (
        <div className="App">
            <AddItemForm  addItem = {addTodolist}/>
            {todolists.map(el=> {

                let taskForTodolist = tasks[el.id]

                if (el.filter === 'completed') {
                    taskForTodolist = tasks[el.id].filter(el=>el.isDone === true)
                }
                if (el.filter === 'active') {
                    taskForTodolist = tasks[el.id].filter(el=>el.isDone === false)
                }
                return (
                    <Todolist
                        key = {el.id}
                        todolistId = {el.id}
                        name = {el.title}
                        tasks={taskForTodolist}
                        onClickRemoveTask = {removeTask}
                        changeFilter = {changeFilter}
                        addTask={addTask}
                        changTaskStatus = {changTaskStatus}
                        filter = {el.filter}
                        removeTodolist = {removeTodolist}
                        onChangeTodolist={onChangeTodolist}
                        onChangeNameTodolists={onChangeNameTodolists}
                    />
                    )
            })}
        </div>
    );
}


