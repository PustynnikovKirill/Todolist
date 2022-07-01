import axios from 'axios'


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true,
    headers: {
        // Не забываем заменить API-KEY на собственный
        'API-KEY': '1e51101a-ead9-4f92-851f-b9eb36d46d8d'
    }
})


export const todolistAPI = {
    updateTodolist(todolistId: string, title:string) {
        const promise = instance.put(`todo-lists/${todolistId}`,title)
        return promise
    },

    deleteTodolist(todolistId: string) {
        const promise = instance.delete(`todo-lists/${todolistId}`)
        return promise
    },
    createTodolist(title: string) {
        const promise = instance.post<CreateTodolistResponseType>(`todo-lists`,{title})
        return promise
    },
    getTodolists() {
        const promise = instance.get<Array<TodolistType>>(`todo-lists`)
        return promise
    },

}


type TodolistType= {
    id: string
    addedDate: string
    order: number
    title: string
}
type CreateTodolistResponseType = {
    resultCode: number
    messages: Array<string>
    fieldsErrors: Array<string>
    data: {
        item: TodolistType
    }
}
