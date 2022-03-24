import React, {useState} from "react";
import './App.css'

type moneyTape = {
    banknote: string,
    nominal: number,
    number: string
}
export const App = () => {
    let [money, setMoney] = useState([
        {banknote: 'dollar', nominal: 100, number: 'a12342123'},
        {banknote: 'dollar', nominal: 100, number: 'a12342123'},
        {banknote: 'dollar', nominal: 100, number: 'a12342123'},
        {banknote: 'dollar', nominal: 100, number: 'a12342123'},
        {banknote: 'dollar', nominal: 100, number: 'a12342123'},
        {banknote: 'dollar', nominal: 100, number: 'a12342123'},
        {banknote: 'dollar', nominal: 100, number: 'a12342123'},
        {banknote: 'dollar', nominal: 100, number: 'a12342123'}
    ])

    return (
        <ul>
            {money.map((el:moneyTape,index)=>{
            return (
                <li >
                    <span>{el.banknote} </span>
                    <span>{el.nominal} </span>
                    <span>{el.number} </span>
                </li>
                )
            })}


        </ul>
    )
}




