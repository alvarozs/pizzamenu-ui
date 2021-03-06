/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import history from 'utils/history';
import pizzasReducer from 'containers/PizzasPage/reducer';
import pizzaReducer from 'containers/Pizza/reducer';
import toppingsReducer from 'containers/ToppingsPage/reducer';

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    pizzas: pizzasReducer,
    pizza: pizzaReducer,
    toppings: toppingsReducer,
    router: connectRouter(history),
    ...injectedReducers,
  });

  return rootReducer;
}
