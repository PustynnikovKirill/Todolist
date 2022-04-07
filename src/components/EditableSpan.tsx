import React, {useState} from "react";

type PropsEditableSpan = {
    title: string
}


export const EditableSpan = (props: PropsEditableSpan) => {
    let [edit, setEdit] = useState(false)

    const turnOnHandler = () => {
        setEdit(true)
    }
    const turnOfHandler = () => {
        setEdit(false)
    }
    return (
        edit
            ? <input value={props.title} onBlur={turnOfHandler} />
            : <span onDoubleClick={turnOnHandler}> {props.title}</span>

    )

}