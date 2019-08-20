import { Task , Item} from './types';
import { FetchTasksAction, AddItemsAction } from './actions';

export interface AppState {
  tasks: Task[],
  items: Item[]
}

const defaultState = {
  tasks: [],
  items: []
};

export const reducer = (
  state: AppState = defaultState,
  action: FetchTasksAction| AddItemsAction
) => {
  switch (action.type) {
    case 'FETCH_TASKS':
      return {
        ...state,
        tasks: action.tasks
      }
      case 'ADD_ITEM':
      return {
        ...state,
       items: action.items
      };
  }
  return state;
};
