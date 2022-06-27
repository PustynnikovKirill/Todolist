import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import {Button} from './Button';
import {AddItemForm} from "../AddItemForm";
import {action} from "@storybook/addon-actions";
import {Task} from "../Task";
import {TaskType} from "../Todolist";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'TODOLIST/Task',    // здесь какое-то имя, хз
    component: Task,
    args: {
        changeTaskStatus: action("changeTaskStatus"),
        changeTaskTitle: action('changeTaskTitle'),
        removeTask: action('removeTask'),
        todolistId: 'erg'
    }//здесь записываем имя компоненты

    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Task>;//прописываем название компоненты

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Task> = (args) => <Task {...args} />;  // сюда тоже вставляем название компоненты

export const TaskIsDoneStories = Template.bind({}); //здесь вставляем название компоненты
// More on args: https://storybook.js.org/docs/react/writing-stories/args
TaskIsDoneStories.args = {               //здесь вставляем название компоненты новой
    task: {id: 'gr', isDone: true, title: 'JS'},
    todolistId: 'erg'
};

export const TaskIsNotStories = Template.bind({}); //здесь вставляем название компоненты
// More on args: https://storybook.js.org/docs/react/writing-stories/args
TaskIsNotStories.args = {               //здесь вставляем название компоненты новой
    task: {id: 'gr1', isDone: false, title: 'HTML'},
};


