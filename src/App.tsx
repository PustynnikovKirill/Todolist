import React, {useState} from "react";
import './App.css'
import {NewComponent} from './NewComponent';

export type FilterType = 'ruble'|'dollar'|'all'
export type newMoneyType = {
    banknote: string, nominal: number, number: string
}

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

    let[filter,setFilter]=useState<FilterType>('all')

    let newMoney = money;

    if (filter === 'ruble') {
        newMoney = money.filter(t => t.banknote === 'rubles')
    }
    if (filter === 'dollar') {
        newMoney = money.filter(t => t.banknote === 'dollar')
    }
    const onClickButton = (name: FilterType) => {
      setFilter(name)
    }

    return (

     <NewComponent newMoney={newMoney} onClickButton={onClickButton}/>
    )
}




