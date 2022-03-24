import React, {useState} from "react";
import './App.css'


export const App = () => {
    let [money, setMoney] = useState([
        {banknote: 'dollar', nominal: 100, number: 'a82342123'},
        {banknote: 'rubles', nominal: 100, number: 'a12742123'},
        {banknote: 'dollar', nominal: 100, number: 'a12342123'},
        {banknote: 'dollar', nominal: 100, number: 'a42342223'},
        {banknote: 'rubles', nominal: 200, number: 'a11742123'},
        {banknote: 'dollar', nominal: 100, number: 'a12242123'},
        {banknote: 'rubles', nominal: 400, number: 'a12372423'},
        {banknote: 'dollar', nominal: 100, number: 'a12342623'}
    ])

    let[filter,setFilter]=useState(' ')

    let newMoney = money;

    if (filter === 'ruble') {
        newMoney = money.filter(t => t.banknote === 'rubles')
    }
    if (filter === 'dollar') {
        newMoney = money.filter(t => t.banknote === 'dollar')
    }
    const onClickButton = (name: string) => {
      setFilter(name)
    }

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




