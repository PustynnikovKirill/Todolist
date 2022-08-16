import React, {ChangeEvent} from "react";
import {TaskType} from "../Todolist";
import {EditableSpan} from "../EditableSpan";

export type TaskPropsType = {
    task: TaskType
    onClickRemoveTask: (id: string) => void
    changTaskStatus: ( id: string, checked: boolean) => void
    onChangeTodolist:(id:string,newTitle:string)=>void
}

export const Task:React.FC<TaskPropsType>=({task,onClickRemoveTask,
                                               changTaskStatus,onChangeTodolist}:TaskPropsType)=>{
    const onClickRemoveMapHandler = () => {
        onClickRemoveTask(task.id)
    }
    const onChangeHandler = (ev: ChangeEvent<HTMLInputElement>) => {
        changTaskStatus(task.id, ev.currentTarget.checked)
    }
    const onChange = (newTitle:string) => {
        onChangeTodolist(task.id,newTitle)
    }
        return (
            <li key={task.id} className={task.isDone === true ? 'is-done' : ''}>
                <input type="checkbox" checked={task.isDone} onChange={onChangeHandler}/>
                <EditableSpan
                    title={task.title}
                    onChange={onChange}
                />
                <button onClick={onClickRemoveMapHandler}>✖</button>
            </li>
        )
}