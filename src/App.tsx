import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';
import {v1} from 'uuid';
import {AddItemForm} from "./AddItemForm";

export type FilterValuesType = "all" | "active" | "completed";
export type  TodolistType = { id: string, title: string, filter: FilterValuesType }

function App() {
    const todolistId1 = v1()
    const todolistId2 = v1()

    let [todolist, setTodolist] = useState<Array<TodolistType>>([
        {id: todolistId1, title: "Wat", filter: 'all'},
        {id: todolistId2, title: "Hello", filter: 'active'},
    ])

    let [tasks, setTasks] = useState({
        [todolistId1]: [
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true},
            {id: v1(), title: "ReactJS", isDone: false},
            {id: v1(), title: "Rest API", isDone: false},
            {id: v1(), title: "GraphQL", isDone: false},
        ],
        [todolistId2]: [
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true},
            {id: v1(), title: "ReactJS", isDone: false},
            {id: v1(), title: "Rest API", isDone: false},
            {id: v1(), title: "GraphQL", isDone: false},
        ],
    });

    function removeTask(todolistId:string, id:string) {
        setTasks({...tasks,[todolistId]:tasks[todolistId].filter(el=>el.id !== id)});

    }

    function addTask(todolistId:string,title: string) {
        let newTask = {id: v1(), title: title, isDone: false};
        setTasks({...tasks,[todolistId]:[newTask,...tasks[todolistId]]});
    }

    function changeStatus(todolistId:string,taskId: string, isDone: boolean) {
        setTasks({...tasks, [todolistId]:tasks[todolistId].map(el=>el.id===taskId ? {...el,isDone}:el)})

    }


    function changeFilter(todolistId: string, value: FilterValuesType) {
        setTodolist(todolist.map(el => el.id === todolistId ? {...el, filter: value} : el));
    }

    const addTodolist = () =>{
        let newId = v1()
        setTodolist([{id:newId, title: "Wat", filter: 'all'},...todolist])
        setTasks({...tasks,[newId]: []})
    }

    const ediTableSpan =(todolistId:string,taskId: string,newTitle:string)=>{
        setTasks({...tasks,[todolistId]:tasks[todolistId].map(el=>el.id===taskId ? {...el,title:newTitle}:el)})
    }
    const newTitle = (todolistId:string,newTitle:string) => {
        setTodolist(todolist.map(el=>el.id===todolistId ? {...el,title:newTitle} : el))
    }

    return (
        <div className="App">
            <AddItemForm  callBack={addTodolist}/>
            {todolist.map(el => {

                let tasksForTodolist = tasks[el.id]

                if (el.filter === "active") {
                    tasksForTodolist = tasks[el.id].filter(t => t.isDone === false);
                }
                if (el.filter === "completed") {
                    tasksForTodolist = tasks[el.id].filter(t => t.isDone === true);
                }

                return (
                    <Todolist
                        key={el.id}
                        todolistId={el.id}
                        title={el.title}
                        tasks={tasksForTodolist}
                        removeTask={removeTask}
                        changeFilter={changeFilter}
                        addTask={addTask}
                        changeTaskStatus={changeStatus}
                        filter={el.filter}
                        ediTableSpan ={ediTableSpan}
                        newTitle={newTitle}

                    />
                )
            })}

        </div>
    );
}

export default App;
