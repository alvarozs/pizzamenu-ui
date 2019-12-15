/**
 * Gets the toppings of the user from Github
 */

import {
  call, put, takeLatest
} from 'redux-saga/effects';
import request from 'utils/request';
import { toppingsLoaded, repoLoadingError } from './actions';
import { LOAD_TOPPINGS } from './constants';

/**
 * Github repos request/response handler
 */
export function* getToppings() {
  const requestURL = 'http://localhost:8086/toppings';

  try {
    const toppings = yield call(request, requestURL);
    yield put(toppingsLoaded(toppings));
  } catch (err) {
    yield put(repoLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* getAllToppings() {
  yield takeLatest(LOAD_TOPPINGS, getToppings);
}
