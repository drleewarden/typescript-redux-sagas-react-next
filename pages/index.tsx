import { Provider } from 'react-redux';
import { reducer } from '../reducer';
import { createStore, applyMiddleware } from 'redux';
import { ConnectedTasksList } from '../components/TasksList';


import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../sagas/'

const sagaMiddleware = createSagaMiddleware()
const enhancers = composeWithDevTools(
  applyMiddleware(sagaMiddleware)
)
const store = createStore(reducer,enhancers);
sagaMiddleware.run(rootSaga)
export default () => (
  <Provider store={store}>
    <ConnectedTasksList />
  </Provider>
);





