import { call, put } from 'redux-saga/effects';
import api from '../../../service/api';

import { loadSuccess, loadFailure } from './action';

export function* loadPeople() {
  try {
    const response = yield call(api.get, 'people');
    console.log({response})

    put(loadSuccess(response?.data));
  } catch (err) {
    yield put(loadFailure());
  }
}