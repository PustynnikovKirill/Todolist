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

export type FilterType = 'all'|'active'|'completed'

export type TodolistType = {
    id:string,
    title: string,
    filter:FilterType
}
export type TasksStateType = {
    [key:string]:TaskType[]
}

export const AppWithReducer = () => {

    let todolistID1 = v1()

    let todolistID2 = v1()

    let [todolists, dispatchToTodolist] = useReducer(todolistsReducer,[
        {id: todolistID1, title: 'What to learn', filter: 'all'},
        {id: todolistID2, title: 'What to buy', filter: 'all'},
    ])

    let [tasks, dispatchToTask] = useReducer(tasksReducer,{
        [todolistID1]:[
            {id: v1(), title: 'HTML&CSS', isDone: true},
            {id: v1(), title: 'JS', isDone: true},
            {id: v1(), title: 'ReactJS', isDone: false},
        ],
        [todolistID2]: [
            {id: v1(), title: 'Rest API', isDone: true},
            {id: v1(), title: 'GraphQL', isDone: false},
        ]
    })

    const addTodolist = (title:string) => {
        dispatchToTodolist(addTodolistAC(title))
        dispatchToTask(addTodolistAC(title))
    }

    const changeFilter = (todolistId:string,filter:FilterType) => {
        dispatchToTodolist(changeTodolistFilter(todolistId,filter))
    }

    const removeTask = (todilistId:string,id:string) => {
        dispatchToTask(removeTaskAC(todilistId,id))
    }

    const addTask = (todolistsId:string,title:string) => {
        dispatchToTask(addTaskAC(todolistsId,title))
    }
    const changTaskStatus = (todolistId:string, id:string,checked:boolean) => {
        dispatchToTask(changeTaskStatusAC(todolistId,id,checked))
    }
    const removeTodolist = (todolistId:string) => {
        dispatchToTodolist(removeTodolistAC(todolistId))
    }
    const onChangeTodolist = (todolistId:string,id:string,newTitle:string) => {
        dispatchToTask(changeTaskTitleAC(todolistId,id,newTitle))
    }
    const onChangeNameTodolists = (todolistId:string,newTitle:string) => {
        dispatchToTodolist(changeTodolistTitle(todolistId,newTitle))
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


