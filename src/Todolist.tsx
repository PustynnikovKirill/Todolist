import React, {useState} from 'react';

type TaskType = {
    id: number
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask:(id:number)=>void
    tasksFilter:(filterValue:string)=>void

}

export function Todolist(props: PropsType) {

    return <div>
        <h3>{props.title}</h3>
        <div>
            <input/>
            <button>+</button>
        </div>
        <ul>

            {props.tasks.map((el,index)=>(
                <li key={el.id}>
                    <button onClick={()=>(props.removeTask(el.id))}>x</button>
                    <input type="checkbox" checked={el.isDone}/>
                    <span>{el.title}</span>
                </li>))}
        </ul>


        <div>
            <button onClick={()=>props.tasksFilter('All')}>All</button>
            <button onClick={()=>props.tasksFilter('Active')}>Active</button>
            <button onClick={()=>props.tasksFilter('Сompleted')}>Completed</button>
        </div>
    </div>
}
