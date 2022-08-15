import React, {useCallback} from 'react';
import './App.css';
import {TaskType, Todolist} from "./Todolist";

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


    const addTodolist =useCallback( (title:string) => {
        dispatch(addTodolistAC(title))
        dispatch(addTodolistAC(title))
    },[])

    const changeFilter = useCallback((todolistId:string,filter:FilterType) => {
        dispatch(changeTodolistFilter(todolistId,filter))
    },[])

    const removeTask = useCallback((todilistId:string,id:string) => {
        dispatch(removeTaskAC(todilistId,id))
    },[])

    const addTask = useCallback((todolistsId:string,title:string) => {
        dispatch(addTaskAC(todolistsId,title))
    },[])

    const changTaskStatus = useCallback((todolistId:string, id:string,checked:boolean) => {
        dispatch(changeTaskStatusAC(todolistId,id,checked))
    },[])

    const removeTodolist = useCallback((todolistId:string) => {
        dispatch(removeTodolistAC(todolistId))
    },[])

    const onChangeTodolist = useCallback((todolistId:string,id:string,newTitle:string) => {
        dispatch(changeTaskTitleAC(todolistId,id,newTitle))
    },[])

    const onChangeNameTodolists = useCallback((todolistId:string,newTitle:string) => {
        dispatch(changeTodolistTitle(todolistId,newTitle))
    },[])

    return (
        <div className="App">
            <AddItemForm  addItem = {addTodolist}/>
            {todolists.map(el=> {


                return (
                    <Todolist
                        key = {el.id}
                        todolistId = {el.id}
                        name = {el.title}
                        tasks={tasks[el.id]}
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


