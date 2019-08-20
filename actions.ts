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

export const fetchTasks = (): FetchTasksAction => ({
  type: 'FETCH_TASKS',
  tasks: [{ title: 'First Task' }, { title: 'Second Task' }]
});

export const addItem = (): AddItemsAction => ({
  type: 'ADD_ITEM',
  items: [{ name: 'First Task' , description: 'Second Task' }]
});
