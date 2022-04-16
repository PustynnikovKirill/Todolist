import React, {useState} from 'react';

type propsEdiTableSpanType = {
    title:string
}

export const EdiTableSpan = (props:propsEdiTableSpanType)=>{
    let [edit, setEdit] = useState(false)

    const turnOnHandler=()=>{
        setEdit(true)
    }

    return(
        edit
        ? <input value={props.title}/>
        : <span onDoubleClick={turnOnHandler}>{props.title}</span>
    )
}