import React, {ChangeEvent, useState} from "react";

export type EditableSpan = {
    title:string
    onChange:(newTitle:string)=>void
}

export const EditableSpan:React.FC<EditableSpan> = ({title,onChange}) => {
    let[newTitle,setNewTitle] = useState(title)
    let[editMode,setEditMode] = useState(false)

    const activeEditMode = () => {
        setEditMode(true)
        setNewTitle(title)
    }
    const activateViewMode =()=> {
        setEditMode(!editMode)
        onChange(newTitle)
    }
    const onChangeHandler = (ev:ChangeEvent<HTMLInputElement>) => {
        setNewTitle(ev.currentTarget.value)
    }
    return (
        editMode
        ? <input value={newTitle} onChange={onChangeHandler} onBlur={activateViewMode} autoFocus/>
        : <span onDoubleClick={activeEditMode}>{title}</span>
    )
}