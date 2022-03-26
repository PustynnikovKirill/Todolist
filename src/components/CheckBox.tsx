import React from 'react';

export CheckBox = ()=>{
    <input type="checkbox" checked={t.isDone}
           onChange={(event)=>
               checkBoxHandler(t.id,event.currentTarget.checked)}/>
}