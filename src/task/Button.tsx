import React, {useState, ChangeEvent} from "react";
import './App.css'

type ButtonPropsType = {
    name:string
    callBack:()=>void
}
export const Button = (props:ButtonPropsType) => {

 const battonPropsHandler =()=>{
    props.callBack()
 }
    return (
        <div>
            <button onClick={battonPropsHandler}>{props.name}</button>
        </div>
    )
}