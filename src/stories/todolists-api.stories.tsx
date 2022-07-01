import React, {useEffect, useState} from 'react'
import axios from "axios";
import {todolistAPI} from "../api/todolist-api";

export default {
    title: 'API'
}
//
// const settings = {
//     withCredentials: true,
//     headers: {
//         // Не забываем заменить API-KEY на собственный
//         'API-KEY': '1e51101a-ead9-4f92-851f-b9eb36d46d8d'
//     }
// }

export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)

    useEffect(() => {
        // здесь мы будем делать запрос и ответ закидывать в стейт.
        // который в виде строки будем отображать в div-ке
        const promise = todolistAPI.getTodolists()
        promise.then((res) => {
            setState(res.data)
        })

        // axios.get("https://social-network.samuraijs.com/api/1.1/todo-lists", settings)
        //     .then((res)=>{
        //         setState(res.data)
        //     })

    }, [])
    return <div>{JSON.stringify(state)}</div>
}
export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistAPI.createTodolist('RESPect')
            .then((resp) => {
                setState(resp.data)
            })

    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = "572739e2-f6bf-4f10-bd2f-6566f827d5c7";
        const promise = todolistAPI.deleteTodolist(todolistId)
        promise.then((res) => {
            setState(res.data);
        })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = '68c7e97a-c612-4488-872b-60c4eee54678'
        const promise = todolistAPI.updateTodolist(todolistId, 'REST')
        promise.then((res) => {
            setState(res.data)
        })
        // axios.put(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todolistId}`, {title: 'REACT>>>>>>>>>'}, settings)
        //     .then((res) => {
        //         setState(res.data)
        //     })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}