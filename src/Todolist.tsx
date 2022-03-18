import React from 'react';

type TaskType = {
    id: number
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTasks:(id:number)=>void
    filterButton:(filterValue:string)=>void
}

export function Todolist(props: PropsType) {
    return <div>
        <h3>{props.title}</h3>
        <div>
            <input/>
            <button>+</button>
        </div>
        <ul>
            {props.tasks.map((el, index) => {
                return (

                <li key={el.id}>
                    <button onClick={()=>props.removeTasks(el.id)}>x</button>
                    <input type="checkbox" checked={el.isDone}/>
                    <span>{el.title}</span></li>
                )
            })}
        </ul>
        <div>
            <button onClick={()=>props.filterButton("all")}>All</button>
            <button onClick={()=>props.filterButton("active")}>Active</button>
            <button onClick={()=>props.filterButton("completed")}>Completed</button>
        </div>
    </div>
}
