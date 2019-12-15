import {
  LOAD_PIZZAS,
  LOAD_PIZZAS_SUCCESS,
  LOAD_PIZZAS_ERROR,
} from './constants';

export function loadPizzas() {
  return {
    type: LOAD_PIZZAS,
  };
}

export function toppingsLoaded(pizzas) {
  return {
    type: LOAD_PIZZAS_SUCCESS,
    pizzas
  };
}

export function repoLoadingError(error) {
  return {
    type: LOAD_PIZZAS_ERROR,
    error,
  };
}
