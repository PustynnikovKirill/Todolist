import axios from 'axios'
import React, {useEffect, useState} from 'react'
import {TodoApi} from "../api/todo-api";

export default {
    title: 'API',
}
const settings = {
    withCredentials: true,
    headers: {
        'API-KEY': 'd7cef770-1324-4f85-98b6-53c13b8daaed'
    }
}
export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        TodoApi.getTodos()
            .then((res) => {
                setState(res.data)
            })
    }, [])
    return <div>{JSON.stringify(state)}</div>
}
export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        TodoApi.createTodo("New title")
            .then((res) => {
                setState(res.data.data.item)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}

export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = '5f59432e-c569-45df-a524-41b02ed4512a'
        TodoApi.deleteTodo(todolistId)
            .then((res) => {
                setState(res.data)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}

export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = 'f10a20bf-61b7-4dbd-ab61-c1550caf3771'
        TodoApi.updateTodo(todolistId, "New New TITLE")
            .then((res) => {
                setState(res.data)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}