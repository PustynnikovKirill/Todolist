import React, {useState} from 'react';
import './App.css';
import {TaskType, Todolist} from "./Todolist";
import {v1} from "uuid";
import {AddItemForm} from "./AddItemForm";

export type FilterType = 'all'|'active'|'completed'

export type TodolistType = {
    id:string,
    title: string,
    filter:FilterType
}
type TasksStateType = {
    [key:string]:TaskType[]
}

export const App = () => {

    let todolistID1 = v1()
    let todolistID2 = v1()

    let [todolists, setTodolists] = useState<Array<TodolistType>>([
        {id: todolistID1, title: 'What to learn', filter: 'all'},
        {id: todolistID2, title: 'What to buy', filter: 'all'},
    ])

    let [tasks, setTasks] = useState<TasksStateType>({
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
        const newTodolistId = v1()
        const newTodolist:TodolistType = {id: newTodolistId, title, filter: 'all'}
            setTodolists([...todolists,newTodolist])
        setTasks({
        ...tasks,[newTodolistId]:[]
        })
    }

    const changeFilter = (todolistId:string,filter:FilterType) => {
        setTodolists(todolists.map(el=>el.id === todolistId ? {...el, filter}:el))
    }

    const removeTask = (todilistId:string,id:string) => {
        setTasks({...tasks,[todilistId]:tasks[todilistId].filter(el => el.id !== id)})

    }

    const addTask = (todolistsId:string,title:string) => {
            let newTask = {id:v1(), title, isDone: false}
            setTasks({...tasks,[todolistsId]:[...tasks[todolistsId],newTask]})
    }
    const changTaskStatus = (todolistId:string, id:string,checked:boolean) => {
        setTasks({...tasks,[todolistId]:[...tasks[todolistId].map(el=>el.id === id ? {...el, isDone:checked}:el)]})
    }
    const removeTodolist = (todolistId:string) => {
        setTodolists(todolists.filter(el=> el.id !== todolistId))
    }
    const onChangeTodolist = (todolistId:string,id:string,newTitle:string) => {
        setTasks({...tasks,[todolistId]:[...tasks[todolistId].map(el=>el.id === id ? {...el, title:newTitle}:el)]})
    }
    const onChangeNameTodolists = (todolistId:string,newTitle:string) => {
        setTodolists(todolists.map(el=>el.id === todolistId ? {...el, title:newTitle}:el))
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


