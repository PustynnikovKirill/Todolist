import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterValuesType} from './App';
import {AddItemForm} from "./AddItemForm";
import {EdiTableSpan} from "./store/EdiTableSpan";

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

export type PropsType = {
    todolistId: string
    title: string
    tasks: Array<TaskType>
    removeTask: (todolistId: string, taskId: string,) => void
    changeFilter: (todolistId: string, value: FilterValuesType) => void
    addTask: (todolistId: string, title: string) => void
    changeTaskStatus: (todolistId: string, taskId: string, isDone: boolean) => void
    filter: FilterValuesType
    ediTableSpan:(todolistId:string,taskId: string,newTitle:string)=>void
    newTitle:(todolistId:string,newTitle:string)=>void
}

export function Todolist(props: PropsType) {

    // let [title, setTitle] = useState("")
    // let [error, setError] = useState<string | null>(null)
    //
    // const addTask = () => {
    //     if (title.trim() !== "") {
    //         props.addTask(props.todolistId, title.trim());
    //         setTitle("");
    //     } else {
    //         setError("Title is required");
    //     }
    // }
    //
    // const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    //     setTitle(e.currentTarget.value)
    // }
    //
    // const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    //     setError(null);
    //     if (e.key === 'Enter') {
    //         addTask();
    //     }
    // }
    // const addTask = (todolistId: string, title: string)=> {
    //     props.addTask(todolistId,title)
    // }

    const addTaskHandler = (title: string) =>{
        props.addTask(props.todolistId,title)

    }

    const onAllClickHandler = () => props.changeFilter(props.todolistId, "all");
    const onActiveClickHandler = () => props.changeFilter(props.todolistId, "active");
    const onCompletedClickHandler = () => props.changeFilter(props.todolistId, "completed");

    const onClickHandler = (tId: string) => props.removeTask(props.todolistId, tId)

    const newTitleHandler = (taskId: string,newTitle:string) => {
        props.ediTableSpan(props.todolistId,taskId,newTitle)
    }

    const propsNewTitle = (newTitle:string)=>{
        props.newTitle(props.todolistId,newTitle)
    }

    return (
            <div>

                <h3><EdiTableSpan title={props.title} callBack={propsNewTitle}/></h3>
                <AddItemForm  callBack={addTaskHandler}/>
                {/*<div>*/}
                {/*    <input value={title}*/}
                {/*           onChange={onChangeHandler}*/}
                {/*           onKeyPress={onKeyPressHandler}*/}
                {/*           className={error ? "error" : ""}*/}
                {/*    />*/}
                {/*    <button onClick={addTask}>+</button>*/}
                {/*    {error && <div className="error-message">{error}</div>}*/}
                {/*</div>*/}
                <ul>
                    {
                        props.tasks.map(t => {

                            const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                                props.changeTaskStatus(props.todolistId, t.id, e.currentTarget.checked);
                            }
                            const xxx = (newTitle:string) => {
                                newTitleHandler(t.id,newTitle)
                            }
                            return <li key={t.id} className={t.isDone ? "is-done" : ""}>
                                <input type="checkbox"
                                       onChange={onChangeHandler}
                                       checked={t.isDone}/>

                                <EdiTableSpan title={t.title} callBack={xxx}/>
                                <button onClick={() => onClickHandler(t.id)}>x</button>
                            </li>
                        })
                    }
                </ul>
                <div>
                    <button className={props.filter === 'all' ? "active-filter" : ""}
                            onClick={onAllClickHandler}>All
                    </button>
                    <button className={props.filter === 'active' ? "active-filter" : ""}
                            onClick={onActiveClickHandler}>Active
                    </button>
                    <button className={props.filter === 'completed' ? "active-filter" : ""}
                            onClick={onCompletedClickHandler}>Completed
                    </button>
                </div>
            </div>
    )
}
