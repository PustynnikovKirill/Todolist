import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';
import {AddItemForm} from "../AddItemForm";
import {action} from "@storybook/addon-actions";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'TODOLIST/AddItemForm',    // здесь какое-то имя, хз
  component: AddItemForm,           //здесь записываем имя компоненты
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    addItem: {
      description: 'button clicked inside form' //описание: 'кнопка нажата внутри формы'
    }
  },
} as ComponentMeta<typeof AddItemForm>;//прописываем название компоненты

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof AddItemForm> = (args) => <AddItemForm {...args} />;  // сюда тоже вставляем название компоненты

export const AddItemFormStories = Template.bind({}); //здесь вставляем название компоненты
// More on args: https://storybook.js.org/docs/react/writing-stories/args
AddItemFormStories.args = {               //здесь вставляем название компоненты
  addItem: action('button clicked inside form')   //вставляем action и в него прописываем то что в description
};

