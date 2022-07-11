import {setTodolistAC, TodolistDomainType, todolistsReducer} from "./todolists-reducer";
import {v1} from "uuid";

let todolistId1:string
let todolistId2:string

let startSate: Array<TodolistDomainType> = []

beforeEach(()=>{
    todolistId1 = v1()
    todolistId2 = v1()
   startSate = [
       {id:todolistId1, title: 'What to learn', filter: 'all', addedDate: '', order:0},
       {id:todolistId2, title: 'What to buy', filter: 'all', addedDate: '', order:0}
   ]
})

test('todolists should be set to the state', () => {
    const action = setTodolistAC(startSate)
    const endState = todolistsReducer([],action)

    expect(endState.length).toBe(2)
})