import React from "react";
import {FilterType, newMoneyType} from "./App";

type PropsMoney = {
    newMoney:newMoneyType[],
    onClickButton:(name: FilterType)=>void
}
export const NewComponent =(props:PropsMoney)=> {
    return (
    <>
        <ul>
            {props.newMoney.map((el, index) => {
                return (
                    <li key={index}>
                        <span>{el.banknote}</span>
                        <span>{el.nominal}</span>
                        <span>{el.number}</span>
                    </li>
                )
            })}


        </ul>
        <button onClick={() => props.onClickButton('ruble')}>Rubles</button>
        <button onClick={() => props.onClickButton('dollar')}>Dollars</button>
        <button onClick={() => props.onClickButton('all')}>All</button>
    </>
    )
}