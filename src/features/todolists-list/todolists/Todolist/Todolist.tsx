import React, {FC, memo, useEffect} from 'react'
import {TodolistDomainType,
} from 'features/todolists-list/todolists/todolists.reducer'
import {tasksThunks} from 'features/todolists-list/tasks/tasks.reducer';
import {useActions} from 'common/hooks';
import {AddItemForm} from 'common/components'
import {TaskType} from "features/todolists-list/tasks/tasks.api";
import {FilterTasksButton} from "features/todolists-list/todolists/Todolist/FilterTaskButtons/filterTasksButton";
import s from './styles.module.css'
import {Tasks} from "features/todolists-list/todolists/Todolist/Tasks/Tasks";
import {TodolistTitle} from "features/todolists-list/todolists/Todolist/TodolistTitle/TodolistTitle";

type Props = {
    todolist: TodolistDomainType
    tasks: TaskType[]
}

export const Todolist: FC<Props> = memo(({todolist, tasks}) => {

    const {fetchTasks, addTask} = useActions(tasksThunks)

    useEffect(() => {
        fetchTasks(todolist.id)
    }, [])

    const addTaskCallback = (title: string) => {
        return addTask({title, todolistId: todolist.id}).unwrap()
    }



    return <div>
        <TodolistTitle todolist={todolist}/>
        <AddItemForm addItem={addTaskCallback} disabled={todolist.entityStatus === 'loading'}/>
        <Tasks tasks={tasks} todolist={todolist}/>
        <div className={s.filter}>
            <FilterTasksButton todolist={todolist}/>
        </div>
    </div>
})


