import React, {useState,KeyboardEvent,ChangeEvent} from 'react';

type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask:(id:string)=>void
    tasksFilter:(filterValue:string)=>void
    addTask:(newTitle:string)=>void

}

export function Todolist(props: PropsType) {
    let[newTitle, setNewTitle]=useState('')
    const addTaskHandler=()=>{
        props.addTask(newTitle)
        setNewTitle('')
    }
    const onKeyPressHandler=(event:KeyboardEvent<HTMLInputElement>)=>{
        if (event.key==='Enter'){
            addTaskHandler()
        }
    }
    const onChange=(event:ChangeEvent<HTMLInputElement>)=>{
        setNewTitle(event.currentTarget.value)
    }
    const filterValue=(filterValue:string)=>{
        props.tasksFilter(filterValue)
    }
    const removeTask=(id:string)=>{
        props.removeTask(id)

    }

    return <div>
        <h3>{props.title}</h3>
        <div>
            <input value={newTitle}
                   onKeyPress={onKeyPressHandler}
                   onChange={onChange}/>
            <button onClick={addTaskHandler}>+</button>
        </div>
        <ul>

            {props.tasks.map((el,index)=>(
                <li key={el.id}>
                    <button onClick={()=>removeTask(el.id)}>x</button>
                    <input type="checkbox" checked={el.isDone}/>
                    <span>{el.title}</span>
                </li>))}
        </ul>


        <div>
            <button onClick={()=>filterValue('All')}>All</button>
            <button onClick={()=>filterValue('Active')}>Active</button>
            <button onClick={()=>filterValue('Completed')}>Completed</button>
        </div>
    </div>
}
