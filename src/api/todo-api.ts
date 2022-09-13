import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true,
    headers: {
        'API-KEY': 'd7cef770-1324-4f85-98b6-53c13b8daaed'
    }
})

export const TodoApi = {
    getTodos() {
        return instance.get<TodoType[]>(`todo-lists`)
    },
    createTodo(title: string) {
        return instance.post<CreateTodoResponseType>(`todo-lists`, {title})
    },

    deleteTodo(todolistId: string) {
        return instance.delete<DeleteAndUpdateTodolistType>(`todo-lists/${todolistId}`,)
    },
    updateTodo(todolistId: string, title: string) {
        return instance.put<DeleteAndUpdateTodolistType>(`todo-lists/${todolistId}`, {title})
    }
}


export type TodoType = {
	id: string;
	title: string;
	addedDate: string;
	order: number;
}
export type CreateTodoResponseType = {
	messages: string;
	fieldsErrors:string;
	resultCode: number;
    data: {
        item:TodoType
    };
}
export type DeleteAndUpdateTodolistType = {
	messages: string;
	fieldsErrors: string;
	resultCode: number;
    data:{};
}

