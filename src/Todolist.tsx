import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterValuesType} from './App';
import {FullInput} from "./components/FullInput";
import {Input} from "./components/input";
import {Button} from "./components/Button";

type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string) => void
    changeFilter: (value: FilterValuesType) => void
    addTask: (title: string) => void
}

export function Todolist(props: PropsType) {

    let [title, setTitle] = useState("")

    // const onAllClickHandler = () => props.changeFilter("all");
    // const onActiveClickHandler = () => props.changeFilter("active");
    // const onCompletedClickHandler = () => props.changeFilter("completed");

    const addTaskHandler = () => {
      props.addTask(title)
        setTitle('')
    }
    const changeFilterHandler =(filterValue:FilterValuesType)=> {
        props.changeFilter(filterValue)
    }

    return <div>
        <h3>{props.title}</h3>
        {/*<FullInput callBack={props.addTask}/>*/}
        <>
            <Input
                title={title}
                setTitle={setTitle}
                addTaskProps={props.addTask}
                callBack={addTaskHandler}
            />
            <Button name={'+'} callBack={addTaskHandler}/>
            {/*<div>*/}
            {/*    <input value={title}*/}
            {/*           onChange={ onChangeHandler }*/}
            {/*           onKeyPress={ onKeyPressHandler }*/}
            {/*    />*/}
            {/*    <button onClick={addTask}>+</button>*/}
            {/*</div>*/}
        </>

        <ul>
            {
                props.tasks.map(t => {

                    const onClickHandler = () => props.removeTask(t.id)

                    return <li key={t.id}>
                        <input type="checkbox" checked={t.isDone}/>
                        <span>{t.title}</span>
                        <button onClick={ onClickHandler }>x</button>
                    </li>
                })
            }
        </ul>
        <div>
            <Button name={'All'} callBack={()=>changeFilterHandler("all")}/>
            <Button name={'Active'} callBack={()=>changeFilterHandler("active")}/>
            <Button name={'Completed'} callBack={()=>changeFilterHandler("completed")}/>

        </div>
    </div>
}
