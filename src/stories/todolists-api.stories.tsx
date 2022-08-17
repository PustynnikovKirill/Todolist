import React, {useEffect, useState} from 'react'
import axios from "axios";
import {todolistAPI} from "../api/todolist-api";

export default {
    title: 'API'
}
const settings = {
    withCredentials:true,
    headers: {
        'API-KEY':'1e51101a-ead9-4f92-851f-b9eb36d46d8d'
    }
}
export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistAPI.getTodolist()
            .then((res)=>{
                setState(res.data)
            })
    }, [])
    return <div>{JSON.stringify(state)}</div>
}
export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistAPI.createTodolist("Ehhoy")
            .then((res)=>{
                setState(res.data)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = "cfca31f8-1fb2-4190-9019-077e4c2361e7"
        todolistAPI.deleteTodolist(todolistId)
            .then((res)=>{
                setState(res.data)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = "e03fa33d-e02b-43a2-b220-94ef4ec175de"
        todolistAPI.updateTodolist(todolistId,"Yo").then((res)=>{
        setState(res.data)
        })
    },[])
    return <div>{JSON.stringify(state)}</div>
}