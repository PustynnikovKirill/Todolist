import React, {ChangeEvent, KeyboardEvent} from "react";

type propsType ={
    title:string
    setTitle:(title: string)=>void
    addTaskProps:(title: string)=>void
    callBack:()=>void
}


export const Input =(props:propsType)=>{

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key=== 'Enter') {
           props.callBack()
        }
    }
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setTitle(e.currentTarget.value)
    }
    return (
        <div>
            <input value={props.title}
                   onChange={ onChangeHandler }
                   onKeyPress={ onKeyPressHandler }
            />
        </div>
    )
}