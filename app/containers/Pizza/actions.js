import {
  LOAD_PIZZA,
  LOAD_PIZZA_SUCCESS,
  LOAD_PIZZA_ERROR,
  ADD_TOPPING_TO_PIZZA,
  ADD_TOPPING_TO_PIZZA_SUCCESS,
  ADD_TOPPING_TO_PIZZA_ERROR,
  REMOVE_TOPPING_FROM_PIZZA,
  REMOVE_TOPPING_FROM_PIZZA_SUCCESS,
  REMOVE_TOPPING_FROM_PIZZA_ERROR,
  LOAD_ALL_TOPPINGS,
  LOAD_ALL_TOPPINGS_SUCCESS,
  LOAD_ALL_TOPPINGS_ERROR,
} from './constants';

export function loadPizza(pizzaId) {
  return {
    type: LOAD_PIZZA,
    pizzaId,
  };
}

export function addToppingToPizza(pizza, topping) {
  return {
    type: ADD_TOPPING_TO_PIZZA,
    pizza,
    topping,
  };
}

export function pizzaLoaded(pizza) {
  return {
    type: LOAD_PIZZA_SUCCESS,
    pizza
  };
}

export function toppingAdded() {
  return {
    type: ADD_TOPPING_TO_PIZZA_SUCCESS
  };
}

export function pizzaLoadingError(error) {
  return {
    type: LOAD_PIZZA_ERROR,
    error,
  };
}

export function toppingAddedError(error) {
  return {
    type: ADD_TOPPING_TO_PIZZA_ERROR,
    error,
  };
}


export function loadToppings() {
  return {
    type: LOAD_ALL_TOPPINGS,
  };
}

export function toppingsLoaded(toppings) {
  return {
    type: LOAD_ALL_TOPPINGS_SUCCESS,
    toppings
  };
}

export function toppingLoadingError(error) {
  return {
    type: LOAD_ALL_TOPPINGS_ERROR,
    error,
  };
}

export function removeToppingFromPizza(pizza, topping) {
  return {
    type: REMOVE_TOPPING_FROM_PIZZA,
    pizza,
    topping,
  };
}
