import React, {ChangeEvent, KeyboardEvent, useState} from 'react';

type propsFullInput = {
    callBack:(title:string)=>void
}

export const FullInput=(props:propsFullInput)=>{
    let [title, setTitle] = useState("")

    const addTask =()=>{
        props.callBack(title);
        setTitle("");
    }
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            addTask();
        }
    }

   return (
        <div>
            <input value={title}
                   onChange={onChangeHandler}
                   onKeyPress={onKeyPressHandler}
            />
            <button onClick={addTask}>+</button>
        </div>
    )
}
