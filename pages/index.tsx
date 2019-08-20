import { Provider } from 'react-redux';
import { reducer } from '../reducer';
import { createStore } from 'redux';
import { ConnectedTasksList } from '../components/TasksList';

const store = createStore(reducer);

export default () => (
  <Provider store={store}>
    <ConnectedTasksList />
  </Provider>
);
