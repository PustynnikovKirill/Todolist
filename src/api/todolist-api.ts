import axios from 'axios'


const settings = {
    withCredentials: true,
    headers: {
        // Не забываем заменить API-KEY на собственный
        'API-KEY': '1e51101a-ead9-4f92-851f-b9eb36d46d8d'
    }
}

export const todolistAPI = {
    updateTodolist(todolistId: string, title:string) {
        const promise = axios.put(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todolistId}`,title, settings)
        return promise
    },

    deleteTodolist(todolistId: string) {
        const promise = axios.delete(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todolistId}`, settings)
        return promise
    },
    createTodolist(title: string) {
        const promise = axios.put(`https://social-network.samuraijs.com/api/1.1/todo-lists`,{title}, settings)
        return promise
    },
    getTodolists() {
        const promise = axios.get(`https://social-network.samuraijs.com/api/1.1/todo-lists`, settings)
        return promise
    },

}
