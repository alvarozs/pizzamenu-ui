import {
  LOAD_PIZZAS,
  LOAD_PIZZAS_SUCCESS,
  LOAD_PIZZAS_ERROR,
  ADD_PIZZA,
  ADD_PIZZA_SUCCESS,
  ADD_PIZZA_ERROR,
} from './constants';

export function loadPizzas() {
  return {
    type: LOAD_PIZZAS,
  };
}

export function addPizza(pizza) {
  return {
    type: ADD_PIZZA,
    pizza
  };
}

export function pizzasLoaded(pizzas) {
  return {
    type: LOAD_PIZZAS_SUCCESS,
    pizzas
  };
}

export function pizzaAdded(pizzas) {
  return {
    type: ADD_PIZZA_SUCCESS,
    pizzas
  };
}

export function pizzasLoadingError(error) {
  return {
    type: LOAD_PIZZAS_ERROR,
    error,
  };
}

export function pizzaAddedError(error) {
  return {
    type: ADD_PIZZA_ERROR,
    error,
  };
}
