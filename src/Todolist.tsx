import React from "react";

type TodolistProps = {
    title: string,
    task: Array<TaskProps>
}
type TaskProps = {
    id: number,
    title: string,
    isDone: boolean
}
export const Todolist = (props: TodolistProps) => {

    return (
        <div className="App">
            <div>
                <h3>{props.title}</h3>
                <div>
                    <input/>
                    <button>+</button>
                </div>
                <ul>
                    {props.task.map((el) => {
                        debugger
                        return <li><input type="checkbox" checked={el.isDone}/> <span>{el.title}</span></li>
                    })}


                </ul>
                <div>
                    <button>All</button>
                    <button>Active</button>
                    <button>Completed</button>
                </div>
            </div>
        </div>
    )
}