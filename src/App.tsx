import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./Todolist";

function App() {

    const[tasks1,setTasks1] = useState([
        {id: 1, title:"HTML7SCC", isDone:true},
        {id: 2, title:"JS", isDone:true},
        {id: 3, title:"ReactJs", isDone:false}er])
    const removeTask = (newid:number)=>{
        setTasks1(tasks1.filter(el=>el.id!==newid))

    }

    return (
        <div className="App">
            <Todolist title={'Yo11111111'}
                      task={tasks1}
                      removeTask={removeTask}
            />

        </div>
    );
}

export default App;
