import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';
import {AddItemForm} from "../AddItemForm";
import {action} from "@storybook/addon-actions";
import AppWithRedux from "../AppWithRedux";
import {Provider} from "react-redux";
import {store} from "../state/store";
import {ReduxStoreProviderDecorator} from "../state/ReduxStoreProviderDecorator";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'TODOLIST/AppWithRedux',    // здесь какое-то имя, хз
    component: AppWithRedux,           //здесь записываем имя компоненты
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    decorator: [ReduxStoreProviderDecorator]
} as ComponentMeta<typeof AppWithRedux>;//прописываем название компоненты

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof AppWithRedux> = (args) => <Provider store={store}><AppWithRedux/></Provider> ;  // оборачиваем провайдером и прокидывам store

export const AppWithReduxStories = Template.bind({}); //здесь вставляем название компоненты
// More on args: https://storybook.js.org/docs/react/writing-stories/args
AppWithReduxStories.args = { };

