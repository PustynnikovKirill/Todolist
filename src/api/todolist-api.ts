import axios from 'axios'


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true,
    headers: {
        'API-KEY': '1e51101a-ead9-4f92-851f-b9eb36d46d8d',
    },
})

export const todolistAPI = {

    getTodolist() {
        const promise = instance.get(
            `todo-lists/`
        )
        return promise
    },

    createTodolist(title:string) {
        const promise = instance.post(
            `todo-lists/`,
            {title:"Yo"},
        )
        return promise
    },

    deleteTodolist(todolistId: string) {
        const promise = instance.delete(
            `todo-lists/${todolistId}`
        )
        return promise
    },

    updateTodolist(todolistId: string, title: string) {
        const promise = instance.put(
            `todo-lists/${todolistId}`,
            {title:title}
        )
        return promise
    },
}