import React, {ChangeEvent, useState} from "react";

type PropsEditableSpan = {
    title: string,
    callback:(newTitle:string)=>void
}


export const EditableSpan = (props: PropsEditableSpan) => {
    let [newTitle, setNewTitle] = useState(props.title)
    let [edit, setEdit] = useState(false)

    const onChangeEditHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.callback(newTitle)
        setNewTitle(e.currentTarget.value)
    }
    const turnOnHandler = () => {
        setEdit(true)
    }
    const turnOfHandler = () => {
        setEdit(false)
        props.callback(newTitle)

    }
    return (
        edit
            ? <input value={newTitle} onChange={onChangeEditHandler} onBlur={turnOfHandler} />
            : <span onDoubleClick={turnOnHandler}> {props.title}</span>

    )

}