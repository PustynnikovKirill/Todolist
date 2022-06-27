import React from 'react'
import {Provider} from "react";
import {store} from "./store";


export const ReduxStoreProviderDecorator = (storyFn: ()=> React.ReactComponentElement<any>) => {
   return <Provider store = {store}> {storyFn()} </Provider>
}