import {
  LOAD_TOPPINGS,
  LOAD_TOPPINGS_SUCCESS,
  LOAD_TOPPINGS_ERROR,
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

export function repoLoadingError(error) {
  return {
    type: LOAD_TOPPINGS_ERROR,
    error,
  };
}
