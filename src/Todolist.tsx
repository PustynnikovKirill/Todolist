import React, {useState} from 'react';

type TaskType = {
    id: number
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask:(id:number)=>void


}

export function Todolist(props: PropsType) {
    const[valueButton, setValueButton] = useState('All')

    const tasksFilter=(filterValue:string)=>{
        setValueButton (filterValue)
    }
    let prokladka = props.tasks
    if (valueButton === 'Active') {
        prokladka=props.tasks.filter((el)=>el.isDone===true)
    }
    if (valueButton === 'Сompleted') {
        prokladka=props.tasks.filter((el)=>el.isDone===false)
    }
    return <div>
        <h3>{props.title}</h3>
        <div>
            <input/>
            <button>+</button>
        </div>
        <ul>

            {prokladka.map((el,index)=>(
                <li key={el.id}>
                    <button onClick={()=>(props.removeTask(el.id))}>x</button>
                    <input type="checkbox" checked={el.isDone}/>
                    <span>{el.title}</span>
                </li>))}
        </ul>


        <div>
            <button onClick={()=>tasksFilter('All')}>All</button>
            <button onClick={()=>tasksFilter('Active')}>Active</button>
            <button onClick={()=>tasksFilter('Сompleted')}>Completed</button>
        </div>
    </div>
}
