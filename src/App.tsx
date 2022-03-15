// @ts-ignore

import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';
import {v1} from "uuid";

function App() {

    let[tasks1,setTasks1]=useState( [
        { id: v1(), title: "HTML&CSS", isDone: true },
        { id: v1(), title: "JS", isDone: true },
        { id: v1(), title: "ReactJS", isDone: false }
    ])

    const removeTask=(newid:string)=>{
        setTasks1(tasks1.filter((el)=>el.id!==newid))
    }
    const[valueButton, setValueButton] = useState('All')

    const tasksFilter=(filterValue:string)=>{
        setValueButton (filterValue)
    }
    const addTask = () => {
       const newTasks = { id: v1(), title: "newTITLE", isDone: false}
        setTasks1([...tasks1,newTasks])
    }
    let prokladka = tasks1
    if (valueButton === 'Active') {
        prokladka = tasks1.filter((el)=>el.isDone===true)
    }
    if (valueButton === 'Сompleted') {
        prokladka = tasks1.filter((el)=>el.isDone===false)
    }



    return (
        <div className="App">
        <Todolist title={"What to learn"}
                  tasks={prokladka}
                  removeTask={removeTask}
                  tasksFilter={tasksFilter}
                  addTask={addTask}
        />
    </div>
)
}

export default App;
