/**
 * Gets the repositories of the user from Github
 */

import {
  call, put, takeLatest
} from 'redux-saga/effects';
import { LOAD_PIZZAS } from 'containers/PizzasPage/constants';
import { pizzasLoaded, repoLoadingError } from 'containers/PizzasPage/actions';

import request from 'utils/request';

/**
 * Github repos request/response handler
 */
export function* getPizzas() {
  const requestURL = 'http://localhost:8086/pizzas';

  try {
    const pizzas = yield call(request, requestURL);
    yield put(pizzasLoaded(pizzas));
  } catch (err) {
    yield put(repoLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* getAllPizzas() {
  yield takeLatest(LOAD_PIZZAS, getPizzas);
}
