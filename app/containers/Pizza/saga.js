/**
 * Gets the pizzas from API
 */

import {
  call, put, takeLatest
} from 'redux-saga/effects';
import axios from 'axios';
import {
  LOAD_PIZZA,
  LOAD_PIZZA_SUCCESS,
  LOAD_ALL_TOPPINGS,
  ADD_TOPPING_TO_PIZZA } from './constants';
import {
  pizzaLoaded,
  pizzaLoadingError,
  toppingLoadingError,
  toppingsLoaded
} from './actions';
import request from '../../utils/request';
import { pizzaAdded, pizzaAddedError } from '../PizzasPage/actions';

/**
 * Gets pizza
 * @param action
 * @returns {IterableIterator<*>}
 */
export function* getPizzaSaga({ pizzaId }) {
  const requestURL = `http://localhost:8086/pizzas/${pizzaId}`;

  try {
    const response = yield call(() => axios.get(requestURL));
    yield put(pizzaLoaded(response.data));
  } catch (err) {
    yield put(pizzaLoadingError(err));
  }
}

/**
 * Gets toppings
 */
export function* getToppings() {
  const requestURL = 'http://localhost:8086/toppings';

  try {
    const toppings = yield call(request, requestURL);
    console.log(toppings);
    yield put(toppingsLoaded(toppings));
  } catch (err) {
    yield put(toppingLoadingError(err));
  }
}


/**
 * Add a topping to given pizza
 * @param pizza
 * @returns {IterableIterator<*>}
 */
export function* addToppingToPizza(action) {
  const requestURL = `http://localhost:8086/pizzas/${action.pizza}/toppings/${action.topping}`;
  try {
    const response = yield call(() => axios.post(requestURL));
    console.log(response);
    // yield put(toppingAdded(response));
  } catch (err) {
    // yield put(toppingAddedError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* rootSaga() {
  yield takeLatest(LOAD_PIZZA, getPizzaSaga);
  yield takeLatest(LOAD_ALL_TOPPINGS, getToppings);
  yield takeLatest(ADD_TOPPING_TO_PIZZA, addToppingToPizza);
}
