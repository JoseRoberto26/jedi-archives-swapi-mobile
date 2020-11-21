import { createStore, Store, applyMiddleware } from 'redux';

import createSagaMiddleware from 'redux-saga';
import { PersonState } from './ducks/people/types';

import rootReducer from './ducks/rootReducer';
import rootSaga from './ducks/rootSaga';

const sagaMiddleware = createSagaMiddleware();

export interface ApplicationState {
  people: PersonState;
}

const store: Store<ApplicationState> = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(rootSaga);

export default store;