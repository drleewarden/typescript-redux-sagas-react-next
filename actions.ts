import { Action } from 'redux';
import { Task , Item } from './types';

export interface FetchTasksAction
  extends Action<'FETCH_TASKS'> {
  tasks: Task[];
}
export interface AddItemsAction
  extends Action<'ADD_ITEM'> {
  items: Item[];
}

export interface DisplayInputs
  extends Action<'GET_INPUT'> {
  input: string;
}

export const fetchTasks = (): FetchTasksAction => ({
  type: 'FETCH_TASKS',
  tasks: [{ title: 'First Task' }, { title: 'Second Task' }]
});

export const addItem = (): AddItemsAction => ({
  type: 'ADD_ITEM',
  items: [{ name: 'First' , description: 'Second Task' },{ name: ' Two' , description: 'Second ' },{ name: 'three' , description: 'Second Task' }]
});

export const getInputValue = (): DisplayInputs => ({
  type: 'GET_INPUT',
  input: 'test'
})
