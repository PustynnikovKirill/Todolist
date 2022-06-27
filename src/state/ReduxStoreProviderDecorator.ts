import React from 'react'
import {Provider} from "react";
import {store} from "./store";


export const ReduxStoreProviderDecorator = (storyFn: any) => {
   return <Provider store = {store}> {storyFn()} </Provider>
}