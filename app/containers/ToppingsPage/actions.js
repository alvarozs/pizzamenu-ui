import {
  LOAD_TOPPINGS,
  LOAD_TOPPINGS_SUCCESS,
  LOAD_TOPPINGS_ERROR,

  ADD_TOPPING,
  ADD_TOPPING_SUCCESS,
  ADD_TOPPING_ERROR,
} from './constants';

export function loadToppings() {
  return {
    type: LOAD_TOPPINGS,
  };
}

export function toppingsLoaded(toppings) {
  return {
    type: LOAD_TOPPINGS_SUCCESS,
    toppings
  };
}

export function toppingLoadingError(error) {
  return {
    type: LOAD_TOPPINGS_ERROR,
    error,
  };
}

export function addTopping(data) {
  return {
    type: ADD_TOPPING,
    data
  };
}

export function toppingAdded(toppings) {
  return {
    type: ADD_TOPPING_SUCCESS,
    toppings
  };
}

export function addToppingError(error) {
  return {
    type: ADD_TOPPING_ERROR,
    error,
  };
}
