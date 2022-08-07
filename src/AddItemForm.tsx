import React, {ChangeEvent, KeyboardEvent, useState} from 'react';

export type AddItemFormType = {
    addItem:(title:string)=>void
}

export const AddItemForm:React.FC<AddItemFormType> = ({addItem}) => {
    let [title, setTitle] = useState('')
    let [error, setError] = useState<string | null>(null)

    const addItems = () => {
        if (title.trim() !== '') {
            addItem(title.trim())
            setTitle('')
        } else {
            setError('Title is requerid')
        }
    }

    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }
    const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        setError(null)
        if (title.trim() !== '') {
            if (event.key === 'Enter') {
                addItem(title.trim())
                setTitle('')
            }
        } else {
            setError('Title is requerid')
        }

    }
    return (
        <div>
            <input value={title}
                   onChange={onChangeHandler}
                   onKeyPress={onKeyPressHandler}
                   className={error ? 'error' : ''}/>
            <button onClick={addItems}>+</button>
            {error && <div className={'error-message'}>{error}</div>}
        </div>
        )
}