/**
 * Gets the toppings of the user from Github
 */

import {
  call, put, takeLatest
} from 'redux-saga/effects';
import request from 'utils/request';
import axios from 'axios';
import { LOAD_TOPPINGS, ADD_TOPPING, ADD_TOPPING_SUCCESS } from './constants';
import {
  toppingsLoaded,
  toppingLoadingError,
  toppingAdded,
  addToppingError
} from './actions';

/**
 * Github repos request/response handler
 */
export function* getToppings() {
  const requestURL = 'http://localhost:8086/toppings';

  try {
    const toppings = yield call(request, requestURL);
    yield put(toppingsLoaded(toppings));
  } catch (err) {
    yield put(toppingLoadingError(err));
  }
}

/**
 * Add topping
 * @param topping
 * @returns {IterableIterator<*>}
 */
export function* addToppingSaga(action) {
  const requestURL = 'http://localhost:8086/toppings';
  try {
    const response = yield call(() => axios.post(requestURL, action.data));
    yield put(toppingAdded(response));
  } catch (err) {
    yield put(addToppingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* rootSaga() {
  yield takeLatest(LOAD_TOPPINGS, getToppings);
  yield takeLatest(ADD_TOPPING, addToppingSaga);
  yield takeLatest(ADD_TOPPING_SUCCESS, getToppings);
}
