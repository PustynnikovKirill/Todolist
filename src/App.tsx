import React, {useState} from "react";
import './App.css'

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
            {money.map((objFromMoneyArr) => {
                return (
                    <li>
                        <span>{objFromMoneyArr.banknote}</span>
                        <span>{objFromMoneyArr.banknote}</span>
                        <span>{objFromMoneyArr.banknote}</span>
                    </li>
                )
            })}
        </ul>
    )
}




