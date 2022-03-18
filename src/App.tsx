import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';

function App() {

    let [tasks1,setTasks]=useState( [
        { id: 1, title: "HTML&CSS", isDone: true },
        { id: 2, title: "JS", isDone: true },
        { id: 3, title: "ReactJS", isDone: false }
    ])
    const removeTasks =(newId:number)=>{
        setTasks(tasks1.filter(el=>el.id!==newId))
    }

    let [valueButton,setValueButton]=useState('All')
    const tasksFilter=(filterValue:string)=>{
        setValueButton(filterValue)
    }
   let prokladka = tasks1
        if(valueButton==="active"){
           prokladka = tasks1.filter(el=>el.isDone===true)
        }
        if(valueButton==="completed"){
            prokladka =tasks1.filter(el=>el.isDone===false)
        }


    return (
        <div className="App">
            <Todolist title="What to learn"
                      tasks={prokladka}
                      removeTasks={removeTasks}
                      filterButton={tasksFilter}
            />
        </div>
    );
}

export default App;
