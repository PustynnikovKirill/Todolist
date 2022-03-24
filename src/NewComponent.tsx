import React from "react";


export const NewComponent =()=> {
    return (
    <>
        <ul>
            {newMoney.map((el, index) => {
                return (
                    <li key={index}>
                        <span>{el.banknote}</span>
                        <span>{el.nominal}</span>
                        <span>{el.number}</span>
                    </li>
                )
            })}


        </ul>
        <button onClick={() => onClickButton('ruble')}>Rubles</button>
        <button onClick={() => onClickButton('dollar')}>Dollars</button>
        <button onClick={() => onClickButton('all')}>All</button>
    </>
    )
}