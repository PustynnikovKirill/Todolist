import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./Todolist";
import {v1} from "uuid";

export type FilterType = 'all'|'active'|'completed'

export const App = () => {
    let [tasks,setTasks] = useState(
        [
            { id: v1(), title: "HTML&CSS", isDone: true },
            { id: v1(), title: "JS", isDone: true },
            { id: v1(), title: "ReactJS", isDone: false },
            { id: v1(), title: "Rest API", isDone: true },
            { id: v1(), title: "GraphQL", isDone: false }
        ]
    )
    let [filter,setFilter] = useState<FilterType>('active')




    let taskForTodolist = tasks

    if (filter === 'completed') {
        taskForTodolist = tasks.filter(el=>el.isDone === true)
    }
    if (filter === 'active') {
        taskForTodolist = tasks.filter(el=>el.isDone === false)
    }


    const onClickFilter = (filter:FilterType) => {
        setFilter(filter)
    }

    const onClickDeleteTask = (id:string) => {
        setTasks(tasks.filter(el=>el.id !== id))
    }

    const addTask = (title:string) => {
            let newTask = {id: v1(), title, isDone: false }
            setTasks([...tasks, newTask])
    }
    const changTaskStatus = (id:string,checked:boolean) => {
       setTasks(tasks.map(el=>el.id === id ? {...el, isDone:checked}: el))
    }
    return (
        <div className="App">
           <Todolist name = "Hey"
                     tasks={taskForTodolist}
                     onClickRemoveTask = {onClickDeleteTask}
                     onClickFilter = {onClickFilter}
                     addTask={addTask}
                     changTaskStatus = {changTaskStatus}
                     filter = {filter}
           />
        </div>
    );
}


