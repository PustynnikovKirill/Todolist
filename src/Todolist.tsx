import React, {useState, KeyboardEvent, ChangeEvent} from 'react';

type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (id: string) => void
    tasksFilter:(filterValue: string)=>void
    addTasks:(newTitle:string)=>void
}


export function Todolist(props: PropsType) {
let [newTitle,setNewTitle]= useState('')

 const addTaskHandler =()=>{
     props.addTasks(newTitle)
     setNewTitle('')
 }
 const onKeyPressHandler =(ev:KeyboardEvent<HTMLInputElement>)=>{
    if (ev.key==='Enter') {
        addTaskHandler()
    }
 }
 const onChangeHandler = (event:ChangeEvent<HTMLInputElement>) =>{
     setNewTitle(event.currentTarget.value)
 }

 const filterHandler =(filterValue:string)=>{
     props.tasksFilter(filterValue)
 }
 const removeTaskHandler = (elID:string) => {
     props.removeTask(elID)
 }
    return <div>

        <h3>{props.title}</h3>
        <div>
            <input value={newTitle}
                   onKeyPress={onKeyPressHandler}
                   onChange={onChangeHandler}/>
            <button onClick={addTaskHandler}>+</button>
        </div>
        <ul>
            {props.tasks.map((el) => {
                return (
                    <li key={el.id}>
                        <button onClick={()=>removeTaskHandler(el.id)}>X</button>
                        <input type="checkbox" checked={el.isDone}/>
                        <span>{el.title}</span>
                    </li>
                )
            })}
        </ul>
        <div>
            <button onClick={()=>filterHandler('All')}>All</button>
            <button onClick={() => filterHandler('Active')}>Active</button>
            <button onClick={() => filterHandler('Completed')}>Completed</button>
        </div>
    </div>
}
