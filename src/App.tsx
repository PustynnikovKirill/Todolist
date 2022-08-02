import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./Todolist";

export type FilterType = 'all'|'active'|'completed'

export const App = () => {
    let [tasks,setTasks] = useState(
        [
            { id: 1, title: "HTML&CSS", isDone: true },
            { id: 2, title: "JS", isDone: true },
            { id: 3, title: "ReactJS", isDone: false },
            { id: 4, title: "Rest API", isDone: true },
            { id: 5, title: "GraphQL", isDone: false }
        ]
    )
    let [filter,setFilter] = useState<FilterType>('active')

    let taskForTodolist = tasks

    if (filter === 'completed') {
        taskForTodolist = tasks.filter(el=>el.isDone === false)
    }
    if (filter === 'active') {
        taskForTodolist = tasks.filter(el=>el.isDone === true)
    }

    const onClickFilter = (filter:FilterType) => {
        setFilter(filter)
    }

    const onClickDeleteTask = (id:number) => {
        setTasks(tasks.filter(el=>el.id !== id))
    }


    return (
        <div className="App">
           <Todolist name = "Hey"
                     tasks={taskForTodolist}
                     onClickRemoveTask = {onClickDeleteTask}
                     onClickFilter = {onClickFilter}
           />

        </div>
    );
}


