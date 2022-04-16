import React, {ChangeEvent, useState} from 'react';

type propsEdiTableSpanType = {
    title:string
    callBack:(newTitle:string)=>void
}

export const EdiTableSpan = (props:propsEdiTableSpanType)=>{
    let [newTitle, setNewTitle] = useState(props.title)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTitle(e.currentTarget.value)
    }

    let [edit, setEdit] = useState(false)

    const turnOnHandler=()=>{
        setEdit(true)
    }
    const turnOfHandler = () => {
      setEdit(false)
        props.callBack(newTitle)
    }
    return (
        edit
        ? <input value={newTitle} onChange={onChangeHandler} autoFocus onBlur = {turnOfHandler}/>
        : <span onDoubleClick={turnOnHandler}>{props.title}</span>
    )
}