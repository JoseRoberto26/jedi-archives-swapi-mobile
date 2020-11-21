import { all, takeLatest } from 'redux-saga/effects';

import { PeopleTypes } from './people/types';
import { loadPeople } from './people/sagas';

export default function* rootSaga() {
  return yield all([
    takeLatest(PeopleTypes.LOAD_REQUEST, loadPeople),
  ]);
}