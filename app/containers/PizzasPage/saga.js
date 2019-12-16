/**
 * Gets the pizzas from API
 */

import {
  call, put, takeLatest
} from 'redux-saga/effects';
import { LOAD_PIZZAS, ADD_PIZZA, ADD_PIZZA_SUCCESS } from 'containers/PizzasPage/constants';
import {
  pizzaAddedError,
  pizzasLoaded,
  pizzaAdded,
  pizzasLoadingError
} from 'containers/PizzasPage/actions';
import axios from 'axios';

import request from 'utils/request';

/**
 * Get pizzas
 */
export function* getPizzasSaga() {
  const requestURL = 'http://localhost:8086/pizzas';

  try {
    const pizzas = yield call(request, requestURL);
    yield put(pizzasLoaded(pizzas));
  } catch (err) {
    yield put(pizzasLoadingError(err));
  }
}

/**
 * Add pizza
 * @param pizza
 * @returns {IterableIterator<*>}
 */
export function* addPizzaSaga(action) {
  const requestURL = 'http://localhost:8086/pizzas';
  try {
    const response = yield call(() => axios.post(requestURL, action.pizza));
    yield put(pizzaAdded(response));
  } catch (err) {
    yield put(pizzaAddedError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* rootSaga() {
  yield takeLatest(LOAD_PIZZAS, getPizzasSaga);
  yield takeLatest(ADD_PIZZA, addPizzaSaga);
  yield takeLatest(ADD_PIZZA_SUCCESS, getPizzasSaga);
}
